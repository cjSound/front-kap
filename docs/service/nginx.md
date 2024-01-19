# Nginx

## service 基础配置

```bash
server
    {
        listen 80;
        server_name cjsound.cn;
        index index.html;
    }
```


## 重定向
根路径 / 重定向到 /xxx
```bash
location / {
    rewrite ^/$ /xxx permanent;
}

location /xxx {
    # 处理 /xxx 路径的配置
    # ...
}
```
## 前端静态部署

<br/>
前端部署的静态资源存放位置和访问如下：
<br/>

- 项目部署到服务器实际路径 `/www/nginx/html/test`
- 页面访问路径 `xxx.com/test`

```nginx
location /test {
    root /www/nginx/html;  # 注意，root不需要填写文件实际地址，实际地址为root+location的path
}
```

前端项目为 **history** 部署模式

```nginx
location /test {
    root /www/nginx/html;  # 注意，root不需要填写文件实际地址，实际地址为root+location的path
    try_files $uri $uri/ /test/index.html; # 前端路由路径重定向
}
```

## 清理缓存

::: tip 原因
<br/>

- 乾坤通过 Fetch 获取子服务 html
- 服务端返回为 Content-Type: text/html 默认会当做资源处理，进行缓存
- 再次刷新会直接从**磁盘缓存获取，不会重新请求服务器**

:::

### 解决方案

- Nginx 禁止缓存 服务路径 例如`/iot/`

```nginx
location /iot {
    root  /usr/share/nginx/html;  # 物联网服务
    try_files $uri $uri/ /iot/index.html;
    # 设置缓存过期 防止子服务更新 主服务还是调用之前的缓存信息
    if ($request_uri ~* /iot/$)
    {
        expires -1s;
    }
}
```

## ssl证书部署

- 1、前往云服务厂商下载 ssl 证书 [腾讯云SSL](https://console.cloud.tencent.com/ssl)
- 2、下载SSL证书 到 ``nginx/ssl/www.xxx.cn_nginx``
- 3、如下配置
```nginx
server {
     #SSL 默认访问端口号为 443
     listen 443 ssl; 
     #请填写绑定证书的域名
     server_name www.xxx.cn; 
     #请填写证书文件的相对路径或绝对路径
     ssl_certificate /www/nginx/ssl/www.xxx.cn_nginx/www.xxx.cn_bundle.crt; 
     #请填写私钥文件的相对路径或绝对路径
     ssl_certificate_key /www/nginx/ssl/www.xxx.cn_nginx/www.xxx.cn.key; 
     ssl_session_timeout 5m;
     #请按照以下协议配置
     ssl_protocols TLSv1.2 TLSv1.3; 
     #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
     ssl_prefer_server_ciphers on;
    location / {
        rewrite ^/$ /xxx permanent;
    }

    location /xxx {
        # 处理 /xxx 路径的配置
        # ...
    }
}
```


## http重定向https

如果部署了https，默认采用https，可以将http链接全部重定向到对应的https链接

```nginx
server 
    {
        listen 80;
        server_name xxx.cn;
        index index.html;
        location / {
          return 301 https://$host$request_uri;
        }
    }
```
