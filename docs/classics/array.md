# 数组方法


## push 在数组末尾插入元素
arr.push(value)，在数组的末尾添加一个或多个元素，并返回数组的新长度。
```js
let arr=[1,2,3,4,5]
var longth=arr.push(6,7);
console.log(arr, longth); // [1, 2, 3, 4, 5, 6, 7] 7
```

## pop 删除数组末尾的元素
arr.pop()删除索引值最大的元素,并返回被删除的元素。

```js
let arr=[1,2,3,4,5]
var delElement=arr.pop();
console.log(arr, delElement); //  [1, 2, 3, 4] 5
```
arr.pop()的与arr.length--的效果一样，但arr.length--没有返回值；

## unshift 在数组的头部插入元素
　　unshift(value);在数组的头部添加一个或多个元素,并返回数组的新长度
```js
let arr=[1,2,3,4,5]
var length= unshift(0);
console.log(arr,length);//arr的值为[0,1,2,3,4,5];length的值为更改后数组的长度6；
```
## shift 删除数组的头部元素
　　shift();删除索引为0的元素，并返回删除的元素

```js
let arr=[1,2,3,4,5]
var delElement= unshift();
console.log(arr, delElement); //arr的值为[2,3,4,5];delElement的值为被删除的元素1；
```
## concat
合并数组或元素，返回新的数组,原数组不会改变
```js
let arr=[1,2,3,4,5]
let newArr=arr.concat([6,7,8],9,10);
console.log(newArr,arr); //newArr的值为[1,2,3,4,5,6,7,8,9,10];　　arr的值还是原来的[1,2,3,4,5];

// 　　concat()还可以复制一个新数组;
let copyArr=arr.concat();//copyArr的值和arr的相同
```

## splice 在数组中添加删除或替换元素
在任意位置**添加或删除元素**,返回**删除或被替换的值**，如果没有被删除或替换则返回空数组;
- splice()方法会修改原数组的值;
- 只有一个值时，从当前位置删除到数组末尾
```js
let arr=[1,2,3,4,5]；
let num1=arr.splice(1)
console.log(num1;arr)//num=[2,3,4,5];arr=[1];
```
- 有两个值时，第一个值为删除的**位置**，第二个值为删除的**个数**;

```js
let arr=[1,2,3,4,5]；
let num1=arr.splice(2,3)//删除从索引值2开始的3个元素
console.log(num1;arr);// num1=[3,4,5],arr=[1,2]
```
- 有三个或者多个值时，第一个值为插入元素的位置，第二个值为替换的个数，后面的值都为插入的新元素；
```js
let arr=[1,2,3,4,5]；
let num2=arr.splice(2,1,6,7,8);//从索引值2开始替换掉1个元素，并且插入6,7,8
//如果第二个值为0，则不替换，直接插入6,7,8;
console.log(num2;arr);//被替换的值num2=[3]; arr=[1,2,6,7,8,4,5]
```

## slice 截取复制数组指定位置的内容
>slice()方法不会更改到原数组的值
- slice(开始位置，结束位置)
    - 第二个参数不写默认到尾部,只能从前往后截取；返回的值为截取到的内容形成的**新数组**;
```js
let copyArr=arr.slice(); // slice()或者slice(0)都可以复制数组；
let arr=[1,2,3,4,5]；
let newArr=arr.slice(1,3);//截取索引1到索引3(不包括3)的值;
console.log(newArr,arr)；//newArr=[2,3];arr=[1,2,3,4,5];
```
## join 指定字符连接字符串

join();数组的每个元素以指定的字符连接形成新字符串返回;

```js
let arr=[1,2,3,4,5];
let newArr=arr.join()//默认用逗号连接
console.log(newArr);//newArr=1,2,3,4,5;

//如果连接符为空字符串，则会无缝连接
console.log(arr.join(“”));//输出为12345；
```

## sort 将数组进行排序

sort()将数组进行排序(升序),返回新数组，原数组也会改变;

```js
let arr=[2,3,5,1,4];
let newArr=arr.sort();
console.log(newArr,arr)；//newArr=[1,2,3,4,5]; arr r=[1,2,3,4,5]
```
## reverse 将数组进行倒序
可以将数组进行倒序，并返回新数组，原数组也会随之改变;
```js
let arr=[1,2,3,4,5];
let newArr=arr. reverse();
console.log(newArr,arr)；//newArr=[5,4,3,2,1]; arr=[5,4,3,2,1];
```

# es6新增
## map
通过制定方法处理数组中的每一个元素，并返回处理后的数组。
```js
var arr = [12,14,34,22,18];

var arr1 = arr.map((currentValue,index,arr) => {
    console.log("当前元素"+currentValue);
　　console.log("当前索引"+index);
    if (currentValue>20) {
        return currentValue-10;
    } else {
        return currentValue-5;
    }
})

console.log(arr1) //[7, 9, 24, 12, 13]
```
- 另一种形式
```js
//
let nums = [1, 2, 3];
let obj = {val: 5};
let newNums = nums.map(function(item,index,array) {
return item + index + array[index] + this.val;
//对第一个元素，1 + 0 + 1 + 5 = 7
//对第二个元素，2 + 1 + 2 + 5 = 10
//对第三个元素，3 + 2 + 3 + 5 = 13
}, obj);
console.log(newNums);//[7, 10, 13]
```

## find findIndex
检索数组中的元素，
- find方法返回第一个符合要求的**元素**
- findIndex方法返回第一个符合要求的**元素下标**。
```js
var arr = [12,14,34,22,18];

var arr1 = arr.find((currentValue, index) => {

    return currentValue>20;

})

var arr2 = arr.findIndex((currentValue, index) => {

    return currentValue>20;

})

console.log(arr,arr1,arr2);

//数组元素为对象

var allPeple = [

    {name: '小王', id: 14},

    {name: '大王', id: 41},

    {name: '老王', id: 61}

]

var PId = 14; //假如这个是要找的人的ID

var myTeamArr = [{name: '小王',   id: 14}]

function testFunc(item){return item.id == PId ;}

//判断myteam里是不是有这个人，如果==-1 代表没有，在allPeople中找到他，添加入我的队伍

myTeamArr.findIndex(testFunc) == -1

    ? myTeamArr.push(allPeple.find(testFunc)) 

    : console.log('已存在该人员');

//检索满足条件的对象

var stu = [

    {name: '张三', gender: '男', age: 20},

    {name: '王小毛', gender: '男', age: 20},

    {name: '李四', gender: '男', age: 20}

]

var obj = stu.find((element) => (element.name == '李四'))

console.log(obj);

console.log(obj.name);

[1,2,3].findIndex(function(x) {x == 2;});

// Returns an index value of 1.

[1,2,3].findIndex(x => x == 4);

// Returns an index value of -1
```


## filter
检索数组中的元素，并以数组的形式**返回所有符合要求的元素**。
```js
var arr = [12,14,34,22,18];
var arr1 = arr.filter((currentValue, index) => {
    return currentValue>20;
})
console.log(arr,arr1); //[34, 22]


//逻辑属性的筛选
var arr2 = [
  { id: 1, text: 'aa', done: true },
  { id: 2, text: 'bb', done: false }
]
console.log(arr2.filter(item => item.done)) // [ { id: 1, text: 'aa', done: true }]

// 保留奇数项

let nums = [1, 2, 3];

let oddNums = nums.filter(item => item % 2);

console.log(oddNums); //[1, 3]
```

## every 
检测数组中的**每一个元素是否符合条件**， 全符合才返回true，否则是false。 

```js
var arr = [12,14,34,22,18];
var arr1 = arr.every((currentValue, index) => {
    return currentValue>20;
})
console.log(arr,arr1); //false
```

## some
检测数组中**是否有符合条件的元素**，有符合的返回true,否则是false。
```js
var arr = [12,14,34,22,18];
var arr1 = arr.some((currentValue, index) => {
    return currentValue>20;
})
console.log(arr,arr1); //true
```
## reduce和reduceRight
接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。reduce接受一个函数，函数有四个参数，分别是：上一次的值previousValue，当前值currentValue，当前值的索引index，数组array。

reduceRight方法和reduce方法一样，都是求数组累计数。不同的是reduceRight()从数组的末尾向前将数组中的数组项做累加。

reduceRight()首次调用回调函数callbackfn时，prevValue 和 curValue 可以是两个值之一。如果调用 reduceRight() 时提供了 initialValue 参数，则 prevValue 等于 initialValue，curValue 等于数组中的最后一个值。如果没有提供 initialValue 参数，则 prevValue 等于数组最后一个值， curValue 等于数组中倒数第二个值。
```js
var arr = [0,1,2,3,4];

var total = arr.reduce((a, b) => a + b); //10

console.log(total);

var sum = arr.reduce(function(previousValue, currentValue, index, array){

  console.log(previousValue, currentValue, index);

  return previousValue + currentValue;

});

console.log(sum);

//第二个参数为5，第一次调用的previousValue的值就用传入的第二个参数代替

var sum1 = arr.reduce(function(previousValue, currentValue, index){

  console.log(previousValue, currentValue, index);

  return previousValue + currentValue;

},5);

console.log(sum1);

var sum2 = arr.reduceRight(function (preValue,curValue,index) {

    return preValue + curValue;

}); // 10

var sum3 = arr.reduceRight(function (preValue,curValue,index) {

    return preValue + curValue;

}, 5); // 15

//计算数组arr的平方和

var arr1 = arr.map((oVal) => {return oVal*oVal;}) 

console.log(arr1);

var total1 = arr1.reduce((a, b) => a + b); //30

console.log(total1);

//计算指定数组和

let nums = [1, 2, 3, 4, 5];// 多个数的累加

let newNums = nums.reduce(function(preSum,curVal,array) {

return preSum + curVal;

}, 0);

console.log(newNums)//15
```

## foreach
循环遍历数组的元素，作用相当于for循环，无返回值。

```js
var arr = [12,14,34,22,18];
var arr1 = arr.forEach((currentValue, index) => {
    console.log(currentValue, index);
})
```

## keys，values，entries方法
ES6 提供三个新的方法，entries()，keys()和values()，用于遍历数组。它们都返回一个遍历器对象，
可以用for...of循环进行遍历，唯一的区别是
- keys()是对键名的遍历
- values()是对键值的遍历 
- entries()是对键值对的遍历
```js
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}

// 'a'

// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

## Array.from静态方法

Array.from()方法主要用于将两类对象(类似数组的对象[array-like object]和可遍历对象[iterable]）**转为真正的数组**。

### 类似数组的对象转为真正的数组

```js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
}
console.log(Array.from(arrayLike)); // ["a","b","c"]
```
### 字符转数组
```js
let arr = Array.from('w3cplus.com')  //字符转数组
console.log(arr); // ["w","3","c","p","l","u","s",".","c","o","m"]
```
### Set数据转数组

```js
let namesSet = new Set(['a', 'b'])  //new Set创建无重复元素数组
let arr2 = Array.from(namesSet);  //将Set结构数据转为数组
console.log(arr2); //["a","b"]
```

### 转换Map数据
```js
let m = new Map([[1, 2], [2, 4], [4, 8]]);

console.log(Array.from(m)); // [[1, 2], [2, 4], [4, 8]]
//接受第二个参数为map转换参数

var arr = Array.from([1, 2, 3]);  //返回一个原样的新数组

var arr1 = Array.from(arr, (x) => x * x)

console.log(arr1);    // [1, 4, 9]

var arr2 = Array.from(arr, x => x * x);

console.log(arr2);    // [1, 4, 9]

var arr3 = Array.from(arr).map(x => x * x);

console.log(arr3);    // [1, 4, 9]
```



## copyWidthin 数组内部复制替换
copyWidthin  方法可以在当前数组内部，将指定位置的数组项复制到其他位置(会**覆盖原数组**项)，然后返回当前数组。使用copyWidthin方法会修改当前数组。

copyWidthin将会接受三个参数[.copyWithin(target, start = 0, end = this.length)]：

- target: 这个参数是必须的，从该位置开始替换数组项
- start: 这是一个可选参数，从该位置开始读取数组项，默认为0，如果为负值，表示从数组的右边向左开始读取
- end: 这是一个可选参数，到该位置停止读取的数组项，默认等于Array.length。如果为负值，表示倒数
```js
var arr = [1, 2, 3, 4, 5];
//从下标3开始提取2个（5-3=2）元素到下标0
var arr = arr.copyWithin(0, 3, 5);  
console.log(arr); //[4, 5, 3, 4, 5]
```
## fill 数组填充
fill方法使用给定的值填充一个数组。这种方法用于空数组的初始化非常方便。数组中已有的元素会全部被抹去。

fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```js
var arr = ['a', 'b', 'c',,,];
arr.fill(0, 2, 5);
console.log(arr);  // ["a", "b", 0, 0, 0]
arr.fill(0, 2);

console.log(arr);  // ["a", "b", 0, 0, 0]

arr = new Array(5).fill(0, 0, 3);

console.log(arr);  // [0, 0, 0, empty × 2]

arr = new Array(5).fill(0, 0, 5);

console.log(arr);  // [0, 0, 0, 0, 0]

console.log(new Array(3).fill({}));  //[{…}, {…}, {…}]

console.log(new Array(3).fill(1));   //[1, 1, 1]
```

## Set数组对象用法

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```js
var s = new Set();
[2,3,5,4,5,2,2].forEach(x => s.add(x));
console.log(s);  //{2, 3, 5, 4}
for(let i of s) {console.log(i);}  //Set对象循环
var set = new Set([1,2,3,4,4]);
//符号”...“将一个数组转为用逗号分隔的参数序列
console.log([...set]);  //[1, 2, 3, 4]
var items = new Set([1,2,3,4,5,5,5,5,]);
console.log(items.size);  //5，元素个数
// add添加元素
var set = new Set();
set.add("a");
set.add("b");
console.log(set); //{"a", "b"}
var s = new Set();
s.add(1).add(2).add(2);  //链式添加
console.log(s.size);
console.log(s.has(1));  //has判断元素1是否存在
console.log(s.has(2));  //true
console.log(s.has(3));  //false
s.delete(2);  //删除第2个元素
console.log(s.has(2));  //false
// set转数组
var items = new Set([1,2,3,4,5]);
var array = Array.from(items);
console.log(array);  //[1, 2, 3, 4, 5]
// 数组的 map 和 filter 方法也可以间接用于Set
var s = new Set([1,2,3]);
s = new Set([...s].map(x => x * 2));
console.log(s);  //{2, 4, 6}
s = new Set([...s].filter(x => (x % 3) ==0));
console.log(s);  //6，被3整除
// 实现并集、交集、差集
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);

//并集 
var union = new Set([...a, ...b]);
console.log(union);
//交集 
var intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);
//差集 
var difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
//遍历数据同步改变原来的Set结构

// 利用原Set结构映射出一个新的结构
var set1 = new Set([1,2,3]);
set1 = new Set([...set1].map(val => val *2));
console.log(set1);
// 利用Array.from
var set2 = new Set([1,2,3]);
set2 = new Set(Array.from(set2, val => val * 2));
console.log(set2);
```

## map
```js
var names = ['Michael', 'Bob', 'Tracy'];
var scores = [95, 75, 85];
//Map键值对的结构
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(m.get('Michael')); // 95
//初始化Map需要的二维数组
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
console.log(m.has('Adam')); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
console.log(m.get('Adam')); // undefined
//key相同时，后面的值会把前面的值冲掉
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
console.log(m.get('Adam')) // 88
```