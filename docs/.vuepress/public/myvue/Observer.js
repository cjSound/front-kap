/*
 * @Author: 曹捷
 * @Date: 2022-06-13 18:10:09
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-16 12:01:56
 * @Description: 数据劫持，就是把对象的所有属性添加 set 和 get 方法
 */
class Dep {
    constructor() {
        // 订阅的数组
        this.subs = [];
    }
    addSub (watcher) { // 添加订阅
        this.subs.push(watcher);
    }
    notify () { // 通知
        this.subs.forEach(watcher => watcher.update());
    }
}

class Observer {
    constructor(data) {
        this.observe(data);
    }
    observe (data) {
        // 验证 data
        if (!data || typeof data !== 'object') {
            return;
        }

        // 要对这个 data 数据将原有的属性改成 set 和 get 的形式
        // 要将数据一一劫持，先获取到 data 的 key 和 value
        Object.keys(data).forEach(key => {
            // 劫持（实现数据响应式）
            this.defineReactive(data, key, data[key]);
            this.observe(data[key]); // 深度劫持
        });
    }
    defineReactive (object, key, value) { // 响应式
        let _this = this;
        // 每个变化的数据都会对应一个数组，这个数组是存放所有更新的操作
        let dep = new Dep();

        // 获取某个值被监听到
        Object.defineProperty(object, key, {
            writable: true,//表示能否修改属性的值。默认值为true
            enumerable: true, // 表示能否通过for in循环访问属性，默认值为true
            configurable: true,//表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认值为true。
            get () { // 当取值时调用的方法
                Dep.target && dep.addSub(Dep.target);
                console.log(`劫持 [${key}] 获取数据：`, dep.subs);
                return value;
            },
            set (newValue) { // 当给 data 属性中设置的值适合，更改获取的属性的值
                if (newValue !== value) {
                    _this.observe(newValue); // 重新赋值如果是对象进行深度劫持
                    value = newValue;
                    dep.notify(); // 通知所有人数据更新了
                }
            }
        });
    }
}

