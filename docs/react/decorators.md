# 装饰器

## 装饰器的应用例子

### 1、为所有被装饰的页面设置统一的背景色

```jsx

/*  装饰器  PageDecorator*/

import React, { Component } from 'react'

export const PageDecorator = param=> WrappedComponent=>{

    return class PageNormal extends Component{

        render(){

            let bgColor = param && param.background ? param.background : 'rgb(244,245,250)'
            return (
                <div style={{backgroundColor:bgColor}}>
                    <WrappedComponent  {...this.props} ></WrappedComponent>
                </div>
            )
        }
    }
}

/*  被装饰页面*/

import React, { Component } from 'react'

import {PageDecorator} from '....'  // '...' 内是你的文件路径

@PageDecorator({background:'red'})

export default  class Page extends Component {

/*.   此处略去一万行 */

}

```
此处只是一个简单的例子，实际应用中 装饰器所做的不止是这些，我们可以抽象出某些页面共同的特点，使用装饰器创建公共的模版，其他被装饰的页面只要实现自己独特的部分就可以了。

### 2、一个装饰器封装弹出层的例子

```js

import React, { Component } from 'react'

import { Modal } from 'antd-mobile'

export const ShowModalDecorator = param => WrappedComponent => {

    return class ShowModal extends Component {

        constructor(props) {

            super(props)

            this.state = { show: false, item: {} }

        }

        showModal = item => {

            /****** item 传入的参数 modal 不需要参数可以不填 *********/

            this.setState({ show: true, item: item })

        }

        hiddenModal = () => {

            this.setState({ show: false })

        }

        render() {

            let props = {

                visible: this.state.show

            }

            // 自定义className 默认的 activityModal 是要自己写title的

            props.className =

                param && param.className ? param.className : 'activityModal'

            // 是否展示关闭按钮

            props.closable = param && param.closable ? param.closable : false

            // title

            props.title = param && param.title ? param.title : null

            // 可选: 'slide-down / up' / 'fade' / 'slide'

            props.animationType =

                param && param.animationType ? param.animationType : 'fade'

            //点击蒙层是否允许关闭

            props.maskClosable =

                param && param.maskClosable ? param.maskClosable : true

            return (

                <Modal

                    transparent

                    {...props}

                    onClose={() => {

                        this.hiddenModal()

                    }}

                >

                    /* 被装饰的对象，一些参数可以通过props 传递*/

                     <WrappedComponent

                        hiddenModal={this.hiddenModal.bind(this)}

                        item={this.state.item}

                        {...this.props}

                    ></WrappedComponent>

                </Modal>

            )

        }

    }

}

```

后续所有具有相同风格样式的modal 都可以使用这个modal装饰

```js

import { ShowModalDecorator } from '..'

@ShowModalDecorator()

export default class SendModal extends Component {

    render() {

        return (

            <div>

                <div>

                    {'你猜猜》》》》》》》》》。。。！'}

                </div>

                <div>

                    <div

                        className="sure"

                        onClick={() => {

                            this.props.hiddenModal()

                        }}

                    >

                        {'确认'}

                    </div>

                </div>

            </div>

        )

    }

}

```