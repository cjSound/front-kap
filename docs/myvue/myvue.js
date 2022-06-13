class Vue {
    constructor(options) {
        this.$el = document.querySelector(options.el); //DOM树
        this.$options = options; //传入的options
        this.$watchEvent = {}; //收集事件的对象

        //beforeCreate周期
        if (typeof this.$options.beforeCreate == "function") {
            this.$options.beforeCreate.call(this);
        }

        this.proxyData(); //代理数据
        this.proxyMethods(); //代理方法

        //created周期
        if (typeof this.$options.created == "function") {
            this.$options.created.call(this);
        }

        //beforeMount周期
        if (typeof this.$options.beforeMount == "function") {
            this.$options.beforeMount.call(this);
        }

        this.compile(this.$el); //编译模板

        //mounted周期
        if (typeof this.$options.mounted == "function") {
            this.$options.mounted.call(this);
        }
    }
    proxyData () {
        //该函数首先用于代理数据，使得this.xxx等效于this.$options.xxx
        //并且使用Object.defineProperty来监听数据变化，一旦数据发生变化
        //就根据数据的key值调用vue对象中$watcher中相对应的事件
        for (const key in this.$options.data) {
            let value = this.$options.data[key];
            Object.defineProperty(this, key, {
                configurable: false,
                enumerable: true,
                get () {
                    return value;
                },
                set (val) {
                    value = val;
                    if (this.$watchEvent[key]) {
                        this.$watchEvent[key].forEach((item, i) => {
                            item.update(this);
                        });
                    }
                },
            });
        }
    }
    compile (DOMnode) {
        //该函数根据传入的DOM节点来编译(解析m-html、@click、m-model等)，并递归
        DOMnode.childNodes.forEach((node, index) => {
            console.log('🚀 ~ file: myvue.js ~ line 101 ~ VueEvents.forEach ~ node', node, node.nodeType)
            if (node.nodeType == 3) {
                //文本节点
                let value = node.textContent;
                let reg = /\{\{(.*?)\}\}/;
                node.textContent = value.replace(reg, (match, val) => {
                    let watcher = new Watcher(this, val, node, "textContent");
                    if (this.$watchEvent[val]) {
                        this.$watchEvent[val].push(watcher);
                    } else {
                        this.$watchEvent[val] = [];
                        this.$watchEvent[val].push(watcher);
                    }
                    return this[val];
                });
            } else if (node.nodeType == 1) {
                //元素节点
                var VueEvents = ["m-html", "m-model", 'm-click'];
                VueEvents.forEach((event, i) => {
                    if (node.hasAttribute(event)) {
                        var vmKey = node.getAttribute(event).trim();
                        var watcher;
                        switch (event) {
                            case "m-html":
                                watcher = new Watcher(this, vmKey, node, "innerHTML");
                                node.innerHTML = this[vmKey];
                                break;
                            case "m-model":
                                if (this.hasOwnProperty(vmKey)) {
                                    watcher = new Watcher(this, vmKey, node, "value");
                                    node.value = this[vmKey];
                                    node.addEventListener("input", (e) => {
                                        this[vmKey] = e.target.value;
                                    });
                                }
                                break;
                        }
                        if (this.$watchEvent[vmKey]) {
                            this.$watchEvent[vmKey].push(watcher);
                        } else {
                            this.$watchEvent[vmKey] = [];
                            this.$watchEvent[vmKey].push(watcher);
                        }
                        if (node.hasAttribute("m-click")) {
                            node.addEventListener("click", (e) => {
                                console.log('🚀 ~ file: myvue.js ~ line 104 ~ node.addEventListener ~ this', this, node)
                                this[node.getAttribute("m-click")].call(this, e);
                            });
                        }
                        node.removeAttribute(event);
                    }
                    if (node.childNodes.length != 0) {
                        this.compile(node);
                    }
                });
            }
        });
    }
    proxyMethods () {
        //该函数用于代理方法，使得this.xxx()等效于this.$options.xxx()
        for (const key in this.$options.methods) {
            let method = this.$options.methods[key];
            this[key] = method;
        }
    }
}

//该类用于创建监听器，根据不同的事件名称，来对dom节点执行不同的操作
class Watcher {
    constructor(vm, key, node, attr) {
        this.vm = vm;
        this.key = key;
        this.node = node;
        this.attr = attr;
    }
    update (vm) {
        //beforeUpdate周期
        if (typeof vm.$options.beforeUpdate == "function") {
            vm.$options.beforeUpdate.call(this);
        }
        this.node[this.attr] = this.vm[this.key];
        //updated周期
        if (typeof vm.$options.updated == "function") {
            vm.$options.updated.call(this);
        }
    }
}


export default Vue
