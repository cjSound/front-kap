# 缓存
## 浏览器缓存
:::tip 浏览器缓存
缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提⾼⽹⻚的整体加载速度。

缓存流程 ↓
:::
- 通常浏览器缓存策略分为两种：强缓存和协商缓存
- 先根据这个资源的⼀些 **http header** 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源，不会发请求到服务器；
- 当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另⼀些 **request header**验证这个资源是否命中协商缓存，称为 **http** 再验证，如果命中，服务器将请求返回，但不返回资源，⽽是告诉客户端直接缓存中获取，客户端收到返回后就会从缓存中获取资源；
- 强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源； 区别是，强缓存不对发送请求到服务器，但协商缓存会。
- 当协商缓存也没命中时，服务器就会将资源发送回客户端。
- 当 **ctrl+f5** 强制刷新⽹⻚时，直接从服务器加载，跳过强缓存和协商缓存；
- 当 f5 刷新⽹⻚时，跳过强缓存，但是会检查协商缓存；

### 强缓存
:::tip 
实现强缓存可以通过两种响应头实现： **Expires** 和 **Cache-Control** 。强缓存表示在缓存期间**不需要请求**， state code 为 200
:::
```html
Expires: Wed, 22 Oct 2018 08:41:00 GMT
```
:::tip Expires
**Expires** 是 HTTP / 1.0 的产物，表示资源会在 Wed , 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。并且 Expires **受限于本地时间**，如果修改了本地时间，可能会造成缓存失效。
:::
```html
Cache-control: max-age=30
```

- **Cache-Control:max-age**  优先级 **⾼于Expires** 。该属性表示资源会在 **30** 秒后过期，需要再次请求
### 协商缓存

- 如果缓存过期了，我们就可以使⽤协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 **304** 。
- 协商缓存需要客户端和服务端共同实现，和强缓存⼀样，也有**两种实现⽅式**

#### Last-Modified 和 If-Modified-Since
- **Last-Modified** 表示本地⽂件最后修改⽇期， **If-Modified-Since** 会将**Last-Modified**的值发送给服务器，询问服务器在该⽇期后资源是否有更新，有更新的话就会将新的资源发送回来。
- 但是如果在本地打开缓存⽂件，就会造成 **Last-Modified** 被修改，所以在 HTTP / 1.1出现了 **ETag**

#### ETag 和 If-None-Match
- **ETag** 类似于⽂件指纹，表示资源内容的唯⼀标识， **If-None-Match** 会将当前 **ETag** 发送给服务器，
询问该资源 ETag 是否变动，有变动的话就将新的资源发送回来。并且**ETag 优先级⽐ Last-Modified** ⾼

### 选择合适的缓存策略

:::tip 缓存策略
对于⼤部分的场景都可以使⽤强缓存配合协商缓存解决，但是在⼀些特殊的地⽅可能需要选择特殊的缓存策略
:::

- 对于某些**不需要缓存**的资源，可以使⽤ Cache-control: no-store ，表示该资源不需要缓存

- 对于频繁变动的资源，可以使⽤ Cache-Control: **no-cache** 并配合 **ETag** 使⽤，表示该资源已被缓存，但是**每次都会发送请求询问资源是否更新**。
- 对于代码⽂件来说，通常使⽤ **Cache-Control: max-age=31536000** 并配合策略缓存使⽤，然后对⽂件进⾏指纹处理，⼀旦⽂件名变动就会⽴刻下载新的⽂件



##  cookie、localSrorage、session、indexDB
### 特性比对
|特性 |cookie |localStorage |sessionStorage |indexDB|
|- |- |- |- |-|
| 数据⽣命周期| ⼀般由服务器⽣成，可以设置过期时间| 除⾮被清理，否则⼀直存在 | ⻚⾯关闭就清理 | 除⾮被清理，否则⼀直存在 |
| 数据存储⼤⼩ |**4K**  | **5M** | **5M** |⽆限 |
| 与服务端通信| 每次都会携带在header 中，对于请求性能影响  | 不参与 | 不参与 |不参与 |

:::tip 存储
从上表可以看到， cookie 已经**不建议⽤于存储**。如果没有⼤量数据存储需求的话，可以使⽤ localStorage 和 sessionStorage 。

对于不怎么改变的数据尽量使⽤ localStorage 存储，否则可以⽤ sessionStorage 存储。
:::

### cookie
- 对于 cookie ，我们还需要注意安全性

|属性 | 作用 |
|- | - |
|**value**  | 如果⽤于保存⽤户登录态，应该将该值加密，不能使⽤明⽂的⽤户标识 |
|**secure**  | 只能在协议为 **HTTPS** 的请求中携带 |
|**same-site**  | 规定浏览器不能在跨域请求中携带 **Cookie** ，减少 CSRF 攻击 |
|**http-only**| 不能通过 **JS 访问 Cookie** ，减少 XSS 攻击 |

#### domain 
- 场景 
    - 常用于多个系统之间，共享用户登录状态
- domain表示的是**cookie所在的域**，默认为请求的地址，如网址为www.jb51.net/test/test.aspx，那么domain默认为www.jb51.net。
- 而**跨域访问**，如域A为t1.test.com，域B为t2.test.com，那么在域A生产一个令**域A和域B都能访问的cookie**就要将该cookie的domain设置为.test.com；
- 如果要在域A生产一个令域A不能访问而域B能访问的cookie就要将该cookie的domain设置为t2.test.com

#### path
- path表示cookie所在的目录，asp.net默认为/，就是根目录。
- 在同一个服务器上有目录如下：/test/、/test/cd/、/test/dd/，现设一个cookie1的path为/test/，cookie2的path为/test/cd/
- 那么test下的所有页面都可以访问到cookie1，而/test/和/test/dd/的子页面不能访问cookie2。这是因为cookie能让其path路径下的页面访问。
