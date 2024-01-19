const path = require('path');
/**
 * 本地部署服务器配置
 */
module.exports = {
  host: '', //服务器域名
  port: 22,
  username: '', //服务器账号
  password: '', //服务器ssh密码
  remotePath: '/www/server/nginx/html/xxxx', //静态文件部署路径
  localPath: path.join(__dirname, './docs/.vuepress/dist'), // 本地静态文件路径
};
