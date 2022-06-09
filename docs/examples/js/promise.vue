<!--
 * @Author: 曹捷
 * @Date: 2022-06-09 10:49:06
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-09 10:53:25
 * @Description: fileContent
-->
<template>
  <div>
    <div v-for="item in msgList">
      {{item}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    class MyPromise {
      constructor(func) {
        this.handles = {
          resolves: '',
          rejects: ''
        };
        this.statuInfo = {
          resolves: 0
        };
        func(this._revole.bind(this), this._reject.bind(this));
      }
      //promise里面的手动触发 一般是等到异步结果执行完毕之后触发，传递参数到下一个promise或者是function    
      //执行的是promise实例对象 then里面的函数，successFuc或者是errorFuc
      _revole (value) {
        this.statuInfo.resolves = 1;
        this._value = value;
        if (this.handles.resolves) {            //对象在实例化的时候，已经储存了then里面的function并进行转换
          this.handles.resolves(value);
          delete this.handles.resolves;
        }
      }
      _reject (value) {
      }
      then (onSuccess, onError) {
        const { statuInfo, _value } = this;
        return new MyPromise((resolve, reject) => {
          const success = (value) => {
            if (typeof onSuccess == 'function') {
              //执行当前then函数                    
              const res = onSuccess(value);
              if (res instanceof MyPromise) {
                // resolve,reject其实是返回出去的promise对象上用来触发回调方法，现在注册到res对象上，                        // 相当于我们在res的函数体里面，调用resolve的时候,
                // 其实就是调用返回出去的promise对象的resolve，执行的自然是返回出去的promise绑定的then函数里面的方法了，达到链式调用的效果                        
                res.then(resolve, reject);
              } else {
                //then里传递的参数为普通函数，没有再返回promise对象， 是否有下一个then函数，需要执行                        //这个过程是同步的，立马执行 所以then函数体里面如果是需要异步执行等待，则需要返回一个promise对象                        
                resolve(res);
              }
            } else {
              //这种情况是then没有传递函数，也就没有需要回调的函数 其实是没有意义的                    
              resolve(value);
            }
          }
          if (statuInfo.resolves == 0) {

            this.handles.resolves = success
          } else {
            success(_value)
          }
        })
        // return this;    
      }
    }

    let msgList = ref([])
    let _methods = {
      startMyPromise () {
        function step1 () {
          return new MyPromise(function (resolve, reject) {
            console.log('执行1')
            msgList.value.push('执行1')
            setTimeout(() => {
              console.log('1请求结束')
              msgList.value.push('1请求结束')
              resolve('1传递的参数')
            }, 4000);
          });
        }
        function step2 (data) {
          return new MyPromise(function (resolve, reject) {
            msgList.value.push(`执行2 ,接收的参数:[${data}]`)
            console.log('执行2 ,接收的参数', data)
            setTimeout(() => {
              resolve('2传递的参数')
            }, 4000);
          });
        }
        function step3 (data) {
          return new MyPromise(function (resolve, reject) {
            msgList.value.push(`执行3 ,接收的参数:[${data}]`)
            console.log('执行3 ,接收的参数', data)
            setTimeout(() => {
              resolve('3传递的参数')
            }, 4000);
          });
        }
        step1().then(step2).then(step3).then(res => {
          msgList.value.push(`执行最后,接收的参数:[${res}]`)
          console.log('最后', res)//3传递的参数
        });

      }
    }
    _methods.startMyPromise()
    return { msgList }
  }
}
</script>

<style>
</style>