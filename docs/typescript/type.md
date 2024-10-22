# **TypeScript中的基本类型**

TypeScript中的基本类型：

## 类型声明

  - 类型声明是TS非常重要的一个特点；

  - 通过类型声明可以指定TS中变量（参数、形参）的类型；

  - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；

  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值；

  - 语法：

    - ```typescript
      let 变量: 类型;
      
      let 变量: 类型 = 值;
      
      function fn(参数: 类型, 参数: 类型): 类型{
          ...
      }
      ```
## 定义复用
TypeScript允许我们使用type 和interface来定义类型。

``type`` 定义的类型可以通过交叉类型（**&**）来进行复用，而 ``interface`` 定义的类型则可以通过继承（``extends``）来实现复用。值得注意的是，type和interface定义的类型也可以互相复用。下面是一些简单的示例：

### 复用 **type** 定义的类型：
```ts
type Point = {
  x: number;
  y: number;
};

type Coordinate = Point & {
  z: number;
};

```
### 复用 **interface** 定义的类型：

```ts
interface Point {
  x: number;
  y: number;
};

interface Coordinate extends Point {
  z: number;
}

```
### **interface** 复用 **type** 定义的类型：

```ts
type Point = {
  x: number;
  y: number;
};

interface Coordinate extends Point {
  z: number;
}
```

### **type** 复用 **interface** 定义的类型：

```ts 
interface Point {
  x: number;
  y: number;
};

type Coordinate = Point & {
  z: number;
};
```

## 泛型 T 定义基础类型
相似功能组件属性命名不一致的问题，例如，用于Input组件，不同功能的Input有细微的属性差异，有大量的共同属性，如size、disabled、readOnly等。

定义一套统一的基础类型至关重要。这套基础类型为组件库的开发提供了坚实的基础，确保了所有组件在命名上的一致性。
```ts
type Size = 'small' | 'middle' | 'large';

type BaseProps<T> = {
  /**
   * 定义组件的大小，可选值为 small（小）、middle（中）或 large（大）
   */
  size?: Size;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 组件是否为只读状态
   */
  readOnly?: boolean;
  /**
   * 组件的默认值
   */
  defaultValue?: T;
  /**
   * 组件的当前值
   */
  value?: T;
  /**
   * 当组件值变化时的回调函数
   */
  onChange: (value: T) => void;
}

```
基于这些基础类型，定义具体组件的属性类型变得简单而直接：

```ts
interface WInputProps extends BaseProps<string> {
  /**
   * 输入内容的最大长度
   */
  maxLength?: number;
  /**
   * 是否显示输入内容的计数
   */
  showCount?: boolean;
}

```

## Omit Pick 复用时只会新增属性的定义

例如，有一个已有的类型 **Props** 需要复用，但不需要其中的属性 **c**。在这种情况下，团队成员会重新定义 **Props1** ，仅包含 **Props** 中的属性**a和b**，同时添加新属性 **e**。
```ts
interface Props {
  a: string;
  b: string;
  c: string;
}

interface Props1 {
  a: string;
  b: string;
  e: string;
}

```
实际上，我们可以利用TypeScript提供的工具类型 **Omit** 来更高效地实现这种复用。

```ts
interface Props {
  a: string;
  b: string;
  c: string;
}

interface Props1 extends Omit<Props, 'c'> {
  e: string;
}

```
类似地，工具类型 **Pick** 也可以用于实现此类复用。

```ts
interface Props {
  a: string;
  b: string;
  c: string;
}

interface Props1 extends Pick<Props, 'a' | 'b'> {
  e: string;
}

```
**Omit** 和 **Pick** 分别用于排除和选择类型中的属性，具体使用哪一个取决于具体需求。

## 函数重载

当函数的参数数量不固定、类型不同或返回值类型不同时，而且不愿意将函数拆分为多个函数。

这正是**函数重载**发挥作用的场景。通过函数重载，我们可以在同一函数名下定义多个函数实现，根据不同的参数类型、数量或返回类型进行区分。
```ts
function greet(name: string): string;
function greet(age: number): string;
function greet(value: any): string {
  if (typeof value === "string") {
    return `Hello, ${value}`;
  } else if (typeof value === "number") {
    return `You are ${value} years old`;
  }
}
```
在这个例子中，我们为 **greet** 函数提供了两种调用方式，使得函数使用更加灵活，同时保持类型安全。

对于箭头函数，虽然它们不直接支持函数重载，但我们可以通过定义函数签名的方式来实现类似的效果。

```ts
type GreetFunction = {
  (name: string): string;
  (age: number): string;
};

const greet: GreetFunction = (value: any): string => {
  if (typeof value === "string") {
    return `Hello, ${value}`;
  } else if (typeof value === "number") {
    return `You are ${value} years old.`;
  }
  return '';
};

```
这种方法利用了类型系统来提供编译时的类型检查，模拟了函数重载的效果。

## 组件属性定义：使用type还是interface？

定义组件属性时既能使用type也可以使用interface。

由于同名接口会自动合并，而同名类型别名会冲突，推荐使用 **interface** 定义组件属性。这样，使用者可以通过**declare module**语句自由扩展组件属性，增强了代码的灵活性和可扩展性。
```ts
interface UserInfo {
  name: string;
}
interface UserInfo {
  age: number;
}

const userInfo: UserInfo = { name: "张三", age: 23 };
```

## 自动类型判断

  - TS拥有自动的类型判断机制
  - 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

## 类型：

  | **类型** |     **例子**      |            **描述**            |
  | :------: | :---------------: | :----------------------------: |
  |  number  |    1, -33, 2.5    |            任意数字            |
  |  string  | 'hi', "hi", `hi`  |           任意字符串           |
  | boolean  |    true、false    |       布尔值true或false        |
  |  字面量  |      其本身       |  限制变量的值就是该字面量的值  |
  |   any    |         *         |            任意类型            |
  | unknown  |         *         |         类型安全的any          |
  |   void   | 空值（undefined） |     没有值（或undefined）      |
  |  never   |      没有值       |          不能是任何值          |
  |  object  |  {name:'孙悟空'}  |          任意的JS对象          |
  |  array   |      [1,2,3]      |           任意JS数组           |
  |  tuple   |       [4,5]       | 元素，TS新增类型，固定长度数组 |
  |   enum   |    enum{A, B}     |       枚举，TS中新增类型       |

- number

  - ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

- boolean

  - ```typescript
    let isDone: boolean = false;
    ```

- string

  - ```typescript
    let color: string = "blue";
    color = 'red';
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

  - ```typescript
    let color: 'red' | 'blue' | 'black';
    let num: 1 | 2 | 3 | 4 | 5;
    ```

- any

  - ```typescript
    let d: any = 4;
    d = 'hello';
    d = true;
    ```

- unknown

  - ```typescript
    let notSure: unknown = 4;
    notSure = 'hello';
    ```

- void

  - ```typescript
    let unusable: void = undefined;
    ```

- never

  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

- object（没啥用）

  - ```typescript
    let obj: object = {};
    ```

- array

  - ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

- tuple

  - ```typescript
    let x: [string, number];
    x = ["hello", 10]; 
    ```

- enum

  - ```typescript
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let c: Color = Color.Green;
    ```

## 类型断言

  - 有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

    - 第一种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (someValue as string).length;
        ```

    - 第二种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (<string>someValue).length;
        ```

## 源码练习

```typescript
/* 1.变量类型声明和初始化 */

let a: number;

// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串

let b: string;
b = 'hello';
// b = 123;

// 声明变量的同时直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;
c = true;

/* 2.函数声明 */

// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"

function sum(a: number, b: number): number {
    return a + b;
}

let res = sum(123, 345);
// let res = sum(123, '456'); // 报错

/* 3.字面量声明 */

// 下面的语句相当于定义了一个a3常量；
let a3: 10;
// a3 = 11; // 尝试将a3赋值为11，报错；

/* 4.联合类型 */

let b4: "male" | "female";
b4 = "male";
b4 = "female";

let c4: boolean | string;
c4 = true;
c4 = 'hello';

/* 5.组合类型 */

// &表示同时满足的类型
let a5: { name: string } & { age: number };
a5 = {name: 'haha', age: 18};

/* 6.其他常见基本类型(除了：number、string、bool之外) */

/* 6.1 Any */

// any 表示的是任意类型，一个变量设置类型为any后相当于：对该变量关闭了TS的类型检测！
// 使用TS时，强烈不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let a61;
a61 = 10;
a61 = 'hello';
a61 = true;

/* 6.2 Unknown */

let a62: unknown;
a62 = 10;
a62 = 'hello';
a62 = true;

/* 6.2.2 Unknown和Any对比 */

let s: string = 'hello';
// a61的类型是any，它可以赋值给任意变量
// any赋值给其他变量时，TS也会同时关闭对那个赋值变量的类型检查！
s = a61;

// a62的类型是unknown，它不能赋值给一个确定类型！
// s = a62;

// 即：unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof a62 === "string") {
    s = a62;
}

/* 6.3 void */

// void 用来表示空，主要用于函数中
// 以函数为例，表示没有返回值的函数：
function fn(): void {
}

/* 6.4 undefined */

// never 表示永远不会返回结果（连undefined都没有）[较少使用]
// 下面的函数没有返回值（连undefined都没有），仅抛出error
function fn2(): never {
    throw new Error('报错了！');
}

/* 6.5 object */

// object表示一个js对象类型
let a65: object;
a65 = {};
a65 = function () {
};

// {} 用来指定对象中可以包含哪些属性
// 语法：
//   {属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let b65: { name: string, age?: number };
b65 = {name: 'haha'};
b65 = {name: '孙悟空', age: 18};

// [propName: string]: any 表示任意类型的属性
// 所以下面定义了一个必须包含name属性，其他属性随意的类型
let c65: { name: string, [propName: string]: any };
c65 = {name: '猪八戒', age: 18, gender: '男'};

/* 6.5.2 函数对象 */

/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
*/
let d65: (a: number, b: number) => number;
// 声明了类型之后，在定义时可以不再指出类型
d65 = function (n1, n2) {
    return n1 + n2
}
// 也可以指出类型
d65 = function (n1: number, n2: number): number {
    return n1 + n2
}

// 下面的一些定义都是错误的！
// d65 = function (n1: string, n2: number): number {
//     return n1 + n2
// }
// d65 = function (n1: number, n2: number, n3: number): number {
//     return n1 + n2 + n3;
// }

// 但是下面这个是对的！
d65 = function (n1: number): number {
    return n1
}

/* 6.6 数组 */

/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
*/

// 例如：string[] 表示字符串数组
let e66: string[];
e66 = ['a', 'b', 'c'];

// number[] 表示数值数值
let f66: number[];

// 也可以使用下面的声明方式
let g66: Array<number>;
g66 = [1, 2, 3];

/* 6.7 元组 */

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
*   相比于数组，元组的性能更高一些
*/
let a67: [string, number];
a67 = ['hello', 123];

/* 6.8 枚举 */

enum Gender {
    Male,
    Female,
}

let a68: { name: string, gender: Gender };
a68 = {
    name: 'hello',
    gender: Gender.Male
}
console.log(a68.gender === Gender.Male);

/* 7.类型别名 */

// 使用关键字type
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;
// k = 6 // error!

/* 8.类型断言 */

// 类型断言，用来帮助编译器判断变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */

// 有些情况下，变量的类型对于我们来说是很明确
// 但是TS编译器却并不清楚
// 此时，可以通过类型断言来告诉编译器变量的类型
// 断言有两种形式：

// 8.1：变量 as 类型
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// 8.2：<类型>变量
let strLength2: number = (<string>someValue).length;

```