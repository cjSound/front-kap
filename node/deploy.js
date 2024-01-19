const path = require('path');
const Client = require('ssh2-sftp-client');
const printLoading = require('./loading');

const upload = async (sftp, localPath, remotePath) => {
  // 获取文件夹中的文件和子文件夹
  console.log('开始部署，本地部署文件目录---》', localPath);
  const hasDeploy = await sftp.exists(remotePath);
  if (hasDeploy) {
    console.log('文件夹存在，删除旧的文件夹，然后创建新的文件夹。');
    const rmLoading = printLoading('删除旧版本', '删除成功');
    await sftp.rmdir(remotePath, true);
    rmLoading.close();
  }
  console.log('---------开始上传......');
  const upLoading = printLoading('文件上传中', '文件上传成功');
  await sftp.uploadDir(localPath, remotePath);
  upLoading.close();
};


/**
 * FTP 文件夹上传到远端服务器
 * @param {*} config 
 */
const ftpUpload = async (config) => {
  const localPath = config.localPath; // 本地静态文件路径
  const remotePath = config.remotePath; // 远程服务器目标路径
  const sftp = new Client();
  try {
    await sftp.connect({
      host: config.host,
      port: 22,
      username: config.username,
      password: config.password,
    });
    await upload(sftp, localPath, remotePath);
    console.log('部署成功：Deployment completed.');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    sftp.end();
  }
};

module.exports = ftpUpload;
