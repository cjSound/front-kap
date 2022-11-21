/*
 * @Author: 曹捷
 * @Date: 2022-06-13 18:08:36
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-13 18:14:47
 * @Description: fileContent
 */
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        if (this.el) {
            // 如果这个元素能获取到，我们才开始编译
            // 1.先把这些真实的 DOM 移动到内存种 fragment
            let fragment = this.nodeToFragment(this.el);
            // 2.编译 => 提取想要的元素节点 v-model 和文本节点 {{message}}
            this.compile(fragment);
            // 把编译好的 fragment再塞回到页面中去
            this.el.appendChild(fragment);
        }
    }

    /* 专门写一些辅助方法 */
    isElementNode (node) { // 是不是 dom 节点
        return node.nodeType === 1;
    }
    isDirective (name) { // 是不是指令
        return name.includes('v-');
    }

    /* 核心方法 */
    nodeToFragment (el) { // 需要将 el 中的内容全部放到内存中
        // 文档碎片 内存中的 dom 节点
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment; // 内存中的节点
    }
    compile (fragment) { // 编译文档碎片方法
        // 需要递归
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                // 是元素节点，还需要继续深入的检查
                // console.log('element', node);
                this.compile(node);
                // 这里需要编译元素
                this.compileElement(node);
            } else {
                // 是文本节点
                // console.log('text', node);
                // 这里需要编译文本
                this.compileText(node);
            }
        });
    }
    compileElement (node) { // 编译元素节点
        // 带 v-model 的
        let attrs = node.attributes; // 取出当前节点的属性
        Array.from(attrs).forEach(attr => {
            // 判断属性名字是不是包含 v-
            let attrName = attr.name;
            if (this.isDirective(attrName)) {
                // 取到对应的值，放在节点中
                let exp = attr.value;
                let [, type] = attrName.split('-');
                // node this.vm.$date exp
                CompileUtil[type](node, this.vm, exp);
            }
        });
    }
    compileText (node) { // 编译文本节点
        // 带 {{}} 的
        let exp = node.textContent; // 获取文本中的内容
        let reg = /\{\{([^}]+)\}\}/g; // {{a}} {{b}} {{c}}
        if (reg.test(exp)) {
            // node this.vm.$date exp
            CompileUtil['text'](node, this.vm, exp);
        }
    }
}
