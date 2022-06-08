# 编程
## 冒泡排序
- 每次⽐较相邻的两个数，如果后⼀个⽐前⼀个⼩，换位置
```js
var arr = [3, 1, 4, 6, 5, 7, 2];
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for(var j = 0; j < arr.length - i - 1; j++) {
            if(arr[j + 1] < arr[j]) {
                var temp;
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));
```
## 快速排序
- 采⽤⼆分法，取出中间数，数组每次和中间数⽐较，⼩的放到左边，⼤的放到右边

```js
var arr = [3, 1, 4, 6, 5, 7, 2];
function quickSort(arr) {
    if(arr.length == 0) {
        return []; // 返回空数组
    }
    var cIndex = Math.floor(arr.length / 2);
    var c = arr.splice(cIndex, 1);
    var l = [];
    var r = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < c) {
            l.push(arr[i]);
        } else {
            r.push(arr[i]);
        }
    }
    return quickSort(l).concat(c, quickSort(r));
}
console.log(quickSort(arr));
```

## 编写⼀个⽅法 求⼀个字符串的字节⻓度
- 假设：⼀个英⽂字符占⽤⼀个字节，⼀个中⽂字符占⽤两个字节
```js
function GetBytes(str){
    var len = str.length;
    var bytes = len;
    for(var i=0; i<len; i++){
        if (str.charCodeAt(i) > 255) bytes++;
    }
    return bytes;
 }
alert(GetBytes("你好,as"));

```

##  bind的⽤法，以及如何实现bind的函数和需要注意的点

- bind 的作⽤与 call 和 apply 相同，区别是 call 和 apply 是⽴即调⽤函数，⽽bind 是返回了⼀个函数，需要调⽤的时候再执⾏。 
- ⼀个简单的 bind 函数实现如下

```js
Function.prototype.bind = function(ctx) {
    var fn = this;
    return function() {
        fn.apply(ctx, arguments);
    };
};
```
## 输出今天的⽇期
>以 YYYY-MM-DD 的⽅式，⽐如今天是2014年9⽉26⽇，则输出2014-09-26
```js
var d = new Date();
 // 获取年，getFullYear()返回4位的数字
 var year = d.getFullYear();
 // 获取⽉，⽉份⽐较特殊，0是1⽉，11是12⽉
 var month = d.getMonth() + 1;
 // 变成两位
 month = month < 10 ? '0' + month : month;
 // 获取⽇
 var day = d.getDate();
 day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);
```

## ⽤js实现随机选取10–100之间的10个数字，存⼊⼀个数组，并排序
```js
var iArray = [];
    funtion getRandom(istart, iend){
    var iChoice = istart - iend +1;
    return Math.floor(Math.random() * iChoice + istart);
}
for(var i=0; i<10; i++){
    iArray.push(getRandom(10,100));
}
iArray.sort();
```