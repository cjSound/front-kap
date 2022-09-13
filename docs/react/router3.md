# Router V3

## 按需加载

在router3中的按需加载方式

    route3中实现按需加载只需要按照下面代码的方式实现就可以了。

```js
const about = (location, cb) => {

        require.ensure([], require => {

            cb(null, require('../Component/about').default)

        },'about')

    }

    //配置route

    <Route path="helpCenter" getComponent={about} />
```

在router4以前，我们是使用getComponent的的方式来实现按需加载，getComponent是异步的，只有在路由匹配时才会调用,router4中，getComponent方法已经被移除，所以这种方法在router4中不能使用。