# React学习笔记

## 开发思路
- 确定 UI state 的最小（且完整）表示
## 组件React.FC Hook
- 函数式组件
```js
let cache = undefined
const useState =(defaultValue) => {
    if (cache === undefined) cache = defaultValue
    return [cache, (v)=>{ cache = v }];
};

let cacheEffect
let cacheEffectDeps
let needRun
const useEffect = (effect, deps) => {
    needRun = false
    if (diff(deps, cacheEffectDeps)) {
        cacheEffect = effect
        cacheEffectDeps = deps
        needRun = true
    }

    if (needRun) {
        App.afterRender(() => {
            cacheEffect();
        })
    }
}
```
## className hash?
## 生命周期 只在class组件生效？
- 初始化(Initialization)
constructor()是JS中原生类的构造函数，理论上他不专属于组件的初始化，但是如果把它归类成组件组初始化也是可以接受的。
- 挂载
    - componentWillMount(即将被挂载)、
    - render(挂载)、
    - componentDidMount(挂载完成)
- 更新(Updation)：
    - props发生变化后对应的更新过程
        - componentWillReceiveProps(父组件发生数据更改，父组件的render重新被执行，子组件预测到可能会发生替换新数据)、
        - shouldComponentUpdate(询问是否应该更新？返回true则更新、返回flash则不更新)、
        - componentWillUpate(准备要开始更新)、render(更新)、
        - componentDidUpdate(更新完成)
    - states发生变化后对应的更新过程
        - shouldComponentUpdate(询问是否应该更新？返回true则更新、返回flash则不更新)、
        - conponentWillUpdate(准备要开始更新)、、
        - render(更新)、
        - componentDidUpdate(更新完成)
    - componentWillReceiveProps触发的条件是：
        - 1、一个组件要从父组件接收参数，并且已存在父组件中(子组件第一次被创建时是不会执行componentWillReceiveProps的)
        - 2、只要父组件的render函数重新被执行(父组件发生数据更改，子组件预测到可能会发生替换新数据)，componentWillReceiveProps就会被触发
 
## 向事件处理程序传递参数
在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：


```html
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。

在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
## 和第三方库进行整合
## react hoc 高阶组件
```js
const HOC = (Comp) => {
    class AppHoc {
        render() {
            return <Comp name="123" {...this.props} />
        }
    }
    return AppHoc
}

const store = {}
const connect = (opt) => {
    return (Comp) => {

        class AppHoc {
            render() {
                const reduxProps = opt.mapStateToProps(store)
                return <Comp {...reduxProps} {...this.props} />
            }
        }
        return AppHoc
    }
}
```
## react-router
## react-redux
## useContext
## 组件嵌套 插槽～？
使用props传递或者 默认 props.children
```js
return (
    
    <example left={<leftComponent />}>
        this is childrean content
    </example>
)
```

## ref获取dom实例
```js
class SomePlugin extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.somePlugin();
  }

  componentWillUnmount() {
    this.$el.somePlugin('destroy');
  }

  render() {
    return <div ref={el => this.el = el} />;
  }
}
```
## 性能优化


## 差异性
- vue 是数据驱动，核心是双向绑定，改变数据和监听数据的改变，所有的事件围绕数据的改变
- react为事件驱动改变，数据的改变只会重绘render，render通过differ重新渲染return的jsx，判断更改的地方，并且重新渲染
## 遇到的问题

### 函数组件内部使用React.lazy
- 问题描述

如果放在函数组件内部，每次组件render，lazy会被重新执行，对应的自定义组件会是一个全新的，会导致组件整个重新加载，导致各种问题

- 解决方案：
  - 1、lazy动态加载模块化
  - 2、引用lazy的组件改成class组件，获取自定义组件逻辑不写到render里面


## 组件组

### Demo
在页面开发中，使用单选按钮我们一般会像下面这样去写：

```html 
<input type="radio" name="colors" id="red">红色<br>
<input type="radio" name="colors" id="blue">蓝色<br>
<input type="radio" name="colors" id="yellow">黄色<br>
```
为了能让多个单选按钮组成单选按钮组，我们需要给多个单选按钮指定相同的``name``，但实际上原生的单选按钮样式并不好看，通过我们都是使用封装过的单选按钮组，UI效果类似下图这样的

封装完之后，在页面的使用代码类似下图所示这样

```html 
  <Radio.Group>
    <Radio value="red">红色</Radio>
    <Radio value="blue">蓝色</Radio>
    <Radio value="yellow">黄色</Radio>
  </Radio.Group>
```
**怎么方便的给Radio.Group指定name。**
### 单选组件

```tsx
import React from "react";

export interface IProps {
  name?: string;
  value: any;
}

const Radio: React.FunctionComponent<React.PropsWithChildren<IProps>> = ({
  name,
  value,
  children,
}) => {
  // 示例代码，未定义样式
  return (
    <label>
      <span>
        <input type="radio" name={name} value={value}></input>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Radio;
```
### Group 组件
**使用React.Children解决name位置问题**
```tsx
export interface IProps {
  name: string;
  children: React.ReactNode;
}

const Group: React.FC<IProps> = ({ name, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            name: name,
          });
        }
        throw new Error("子组件必须是React.ReactElement类型");
      })}
    </div>
  );
};
```
在上面的代码中，我们引入了**React.Children**,**React.isValidElement**,**React.cloneElement**三个API,将我们想要的功能实现了出来，那么这三个API都是做什么的，都有什么用呢？

#### React.Children
  [React.Children](https://zh-hans.reactjs.org/docs/react-api.html#reactchildren)
####  React.isValidElement
用于验证传入的是不是React Element，在前文我们在Radio.Group中有使用到这个API,因为props.children对于我们来说是不透明的，所以当我们需要对组件做某些只有React Element才有的操作的时候，就需要调用这个API来进行验证
#### React.cloneElement
用于克隆一个元素，然后返回一个新的元素，在前文我们在Radio.Group中有使用到这个API。那么什么时候会用到这个API呢？当我们希望修改props.children的属性的时候，就可以使用这个API了 