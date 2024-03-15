# Node-Express

## 依赖库

### body-parser

post 请求参数是放在 url 上的，实际场景通常都在 body 上，而 express 直接通过 req.body 只能获取到 undefined，因此需要 body-parser 第三方库

```ts
// 入口文件
import bodyParser from 'body-parser';

const app = express();

// 解析form表单提交的数据application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.text()); //解析 text/plain 数据格式
```

### cors

```ts
// 入口文件
import cors from 'cors';

const app = express();
// 解析form表单提交的数据application/x-www-form-urlencoded
app.use(cors()); // 注入cors模块解决跨域 必须放最前面
```

### tsc-alias 、module-alias 、ts-node-dev 别名

**1、tsconfig.json**
让编辑器可以识别别名

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

在这个例子中，@是你设置的别名， src/ 是别名对应的实际路径。\* 是一个通配符，表示任何子目录或文件。

然后你就可以在你的代码中使用这个别名来导入模块了

**2、nodejs 设置别名**

通过步骤一，TypeScript 编译器能够理解这个别名，但 Node.js 运行时并不能。因此，你需要使用一个模块别名解析器，如 `module-alias`。

2.1、首先，安装 module-alias：

```bash
npm install module-alias
```

2.2、在你的 package.json 文件中添加 \_moduleAliases：

```json
{
  "_moduleAliases": {
    "@": "./src"
  }
}
```

**3、TS 编译注册别名**

通过以上，在运行 nodejs 时，可以通过 @ 来导入模块了。

但是通过 tsc 编译时，还是会报错，因为 tsc 编译时，是没有注册别名的。

最后，在你的应用的入口文件（通常是 app.ts 或 index.ts）的最顶部添加以下代码：

```ts
import 'module-alias/register';
```

并且在 tsc 命令加上 `tsc-alias`

```json
{
  "scripts": {
    "build": "rm -rf dist && tsc && tsc-alias"
  }
}
```

### nodemon 热更新

nodemon 监听文件变化，自动重启服务

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts"
  }
}
```

### jsonwebtoken JWT

通过 JWT 生成 token，并设置 token 过期时间

通过中间件拦截请求，验证 token 是否过期

```ts
import jwt from 'jsonwebtoken';
import config from '../config';
import { Logger } from './utils';
/**
 * 生成jwt token
 * @param payload
 * @returns
 */
export const jwtSecret = (payload: any = {}) => {
  // 登录成功，签发一个token并返回给前端
  const token = jwt.sign(
    // payload ：签发的 token 里面要包含的一些数据
    payload,
    // 私钥
    config.jwtSecret,
    // 设置过期时间
    { expiresIn: 60 * 60 * 24 * 30 } //30 day
  );
  return token;
};

/**
 * jwt验证token
 * 验证成功返回解密的用户信息，失败返回false
 * @param token
 * @returns
 */

export const jwtVerify = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded;
  } catch (error) {
    Logger.error(`JWT验证失败：${error}`);
    return false;
  }
};
```

## 中间件

中间件会按照顺序进行执行，如果某个中间件中断了请求，则后面的中间件不会执行，所以有必要的中间件需要放在最前面

- 1、首要执行的是 **cors 跨域** 必须在最前面，否则会失效
- 2、日志、Token 验证等中间件

## 装饰器注册 Controller 以及路由

```ts
import { Logger } from '@/utils/utils';

type Method = 'get' | 'post';

interface MapRoute {
  name: string;
  url: string;
  method: Method;
  handler: (...args: any[]) => void;
}
interface MapValue {
  baseUrl: string;
  routes: MapRoute[];
  self: any;
}

export const map = new Map<string, MapValue>();
/**
 * 存储controller信息到map中
 * @param controllerName
 */
const setTargetToMap = (controllerName: string) => {
  if (!map.has(controllerName)) {
    map.set(controllerName, {
      routes: [],
      baseUrl: '',
      self: null,
    });
  }
};

const getTargetFromMap = (key: string) => {
  setTargetToMap(key);
  return map.get(key)!;
};

export const addSelfToMap = (controllerName: any, self: any) => {
  const data = getTargetFromMap(controllerName);
  data.self = self;
};

const createRoute = (controllerName: string, info: MapRoute) => {
  const data = getTargetFromMap(controllerName);
  let route = data.routes.find((item) => item.name === info.name);
  if (!route) {
    data.routes.push(info);
  } else {
    Logger.error(`createRoute 方法：${info.name}已经存在，请检查是否重复`);
  }
  return data;
};

/**
 * 类装饰器
 * @param baseUrl
 * @returns
 */
export const Controller = (baseUrl: string) => {
  return (target: any) => {
    const controllerName = target.name;
    if (baseUrl) {
      // 收集前缀路径
      const data = getTargetFromMap(controllerName);
      data.baseUrl = baseUrl;
    }
    Logger.info(`【注册控制器】：【${controllerName}】,基础路径【${baseUrl}】`);
  };
};
const createMapping = function (type: string) {
  return function (path: string) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
      const controllerName = target.constructor.name;
      const handler = descriptor.value;
      const url = path ? path : `/${name}`;
      const routeInfo = { name, url, method: type as Method, handler };
      const controllerData = createRoute(controllerName, routeInfo);
      Logger.info(`【注册路由】控制器->【${controllerName}】 请求类型【${type}】请求路径【${controllerData.baseUrl}${url}】`);
    };
  };
};

export const GetMapping = createMapping('get');
export const PostMapping = createMapping('post');
```

## 扫码 Controller，注册路由

```ts
import path from 'path';
import { map, addSelfToMap } from '../decorator/mapping';
import { Express, Router } from 'express';
import fs from 'fs';
// 封装请求过滤器，统一处理请求异常和自定义异常以及返回数据格式
import requestErrorFilter from '../filter/requestFilter';

//自动注册Controller 和route
const register = (app: Express) => {
  // 遍历存储的数据结构
  map.forEach((item) => {
    // 初始化一个路由模块
    const router = Router();
    // 获取所有路由
    const routes = item.routes ?? [];
    // 遍历每一个路由
    routes.forEach((route) => {
      // 路由url
      const url = route.url;
      if (!route.method || !url || !route.handler) {
        // 判空
        return;
      }
      // 创建路由
      router[route.method](url, (req, res, next) => {
        const handlerRequest = route.handler.bind(item.self, req, res);
        requestErrorFilter(req, res, next, handlerRequest);
      });
    });

    const baseUrl = item.baseUrl;

    if (baseUrl) {
      // 设置路由模块前缀
      app.use(baseUrl, router);
    } else {
      app.use(router);
    }
  });
};

export const scannerController = (app: Express) => {
  // 获取controllers存放的目录
  const dir = path.resolve(__dirname, '../controllers');
  //   获取目录下的所有文件名
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    // 动态加载模块
    const module = require(path.join(dir, file));
    // 模块是通过esmodule的格式导出的，所以需要通过default获取
    const Constructor = module.default;
    // 初始化Controller
    const instance = new Constructor();
    // 将实例对象存储到数据结构中
    addSelfToMap(Constructor.name, instance);
  });
  //   注册路由
  register(app);
};
```

## 请求过滤器

```ts
import { Logger } from '@/utils/utils';
import { Request, Response } from 'express';

/**
 * 请求过滤器
 * 1、统一处理请求错误，对于Controller中的单个服务路由请求，如果出现异常，统一处理
 * 2、封装数据，统一返回格式和code编码
 * @param req
 * @param res
 * @param next
 * @param handler
 */
const requestErrorFilter = async (req: Request, res: Response, next: () => void, handler: () => any) => {
  try {
    const result = await handler();
    res.json({
      code: 200,
      data: result,
    });
  } catch (error: any) {
    Logger.info(`报错了，接口数据如下：请求路径：【${req.url}】,请求参数：【${JSON.stringify(req.body)}】`);
    if (error.name === 'ServiceError') {
      Logger.info(`上面是系统自定义异常，问题不大，错误信息：【${error.message}】`);
      res.status(200).json({
        code: error.code,
        message: error.message,
      });
    } else {
      Logger.error('上面是系统异常，需要关注，日志如下');
      Logger.error(error);
      res.status(500).json({
        code: 500,
        message: '系统异常，请联系服务管理员',
      });
    }
  }
};

export default requestErrorFilter;
```

## Controller 示例

```ts
import ASE from '@/utils/ase';
import userDao from '../db/dao/UserDAO';
import { Controller, GetMapping, PostMapping } from '../decorator/mapping';
import ServiceError from '../error/ServiceError';
import { jwtSecret } from '../utils/jwt';
import { Request } from 'express';
import { ServerRequest } from '@/interface/express';

@Controller('/api')
class LoginController {
  @PostMapping('/auth/login')
  async login(req: Request) {
    const params = req.body;
    const user = await userDao.getUserByPhone(params);
    if (!user) {
      throw new ServiceError('用户不存在');
    }
    const token = jwtSecret({ id: user.id, phone: user.phone });
    return { user, token };
  }
}

export default LoginController;
```

## sequelize 数据库 ORM

[sequelize 官网](https://sequelize.org/)

### 1、查询排除某些字段

例如，查询用户信息，但是不希望返回密码，可以这样写：

```ts
let data = await model.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
});
```

### 2、关联查询

查询关联表的字段

查询用户，并且查询用户关联的笔记类型集合

#### 2.1 设置主外键关联

```ts
//此处为用户关联笔记类型为一对多，因此需要设置外键关联，关联的外键设置在 noteType 表中
// 当需要通过User查询笔记类型时，需要设置此外键关联关系
models.user.hasMany(models.noteType, { foreignKey: 'userId' });
// 此处为笔记类型中的userId字段 ，属于user表
// 如果不需要通过笔记类型查询用户，则不需要设置如下关联关系，如若需要通过noteType查询User，则需要设置
models.noteType.belongsTo(models.user, { foreignKey: 'userId' });
```

```ts
let data = await model.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
  include: {
    model: modules.noteType,
  },
});
```

## sequelize-auto 自动生成 Sequelize 模型

[sequelizeAuto Git](https://github.com/sequelize/sequelize-auto)

主要是一些配置，具体可以看文档

由于我的数据库命名风格是\_为主，需要配置一下

第二注意默认的 `created_at` 和 `updated_at` 字段 ，看是否需要

```json
{
  "scripts": {
    "db": "node script/auto.js"
  }
}
```

```js
// auto.js
const SequelizeAuto = require('sequelize-auto');
// https://github.com/sequelize/sequelize-auto
const auto = new SequelizeAuto('database', 'root', '数据库密码', {
  host: '服务器地址',
  dialect: 'mysql',
  directory: './src/models', // where to write files
  port: '3306',
  caseModel: 'c', //模型命名 驼峰
  caseProp: 'c', //表属性命名 xxx_name 驼峰 xxxName
  caseFile: 'c', // 表文件命名 x_name 驼峰 xName
  singularize: true,
  lang: 'ts', // 生成文件的语言 ts
  additional: {
    timestamps: true,
    createdAt: 'created_at', // 默认的字段映射修改 created_at 命名为 createdAt
    updatedAt: 'updated_at',
  },
});

auto.run().then((data) => {
  console.log(data.tables); // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes); // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations); // relationships between models
  console.log(data.text); // text of generated models
});
```

## 服务器部署


- 1、 文件编译 ，主要是 tsc 编译
- 2、 ftp 同步 package.json 文件 & dist
- 3、 服务器安装 PM2 管理和 node 环境
- 4、 安装&更新依赖
- 5、 执行 start，利用pm2守护node进程

```json
{
  "scripts": {
    "start": "pm2 start dist/index.js"
  }
}
```
