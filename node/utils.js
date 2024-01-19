const { mkdirSync } = require('fs');
const path = require('path');

/**
 * ftp删除单个文件
 * @param {*} sftp
 * @param {*} path
 * @returns
 */
const unLinkAsync = (sftp, path) => {
  return new Promise((resolve, reject) => {
    sftp.unlink(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

/**
 * ftp删除文件夹
 * - 文件夹必须为空文件夹
 * @param {*} sftp
 * @param {*} path
 * @returns
 */
const rmdirAsync = (sftp, path) => {
  return new Promise((resolve, reject) => {
    sftp.rmdir(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
const ftpMkdirAsync = (sftp, path) => {
  return new Promise((resolve, reject) => {
    sftp.mkdir(path, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
/**
 * 读取远程文件夹
 */
const readdirAsync = (sftp, path) => {
  return new Promise((resolve, reject) => {
    sftp.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        // console.log(`读取远程文件夹成功，resolve 返回文件夹下文件列表：${files.length}`);
        resolve(files);
      }
    });
  });
};

/**
 * ftp 上传单个文件到远端
 * @param {*} readStream
 * @param {*} writeStream
 * @returns
 */
const pipeAsync = (readStream, writeStream) => {
  return new Promise((resolve, reject) => {
    readStream
      .pipe(writeStream)
      .on('error', (err) => {
        reject(err);
      })
      .on('finish', () => {
        resolve();
      });
  });
};

/**
 * 递归删除文件夹下所有内容和文件夹
 * @param {*} sftp
 * @param {*} dirPath
 */
const deleteDirectory = async (sftp, dirPath) => {
  console.log('删除文件或者文件夹:', dirPath);
  const files = await readdirAsync(sftp, dirPath);
  for (const entry of files) {
    const fullPath = path.join(dirPath, entry.filename);
    if (entry.attrs.isFile()) {
      await unLinkAsync(sftp, fullPath);
    } else if (entry.attrs.isDirectory()) {
      await deleteDirectory(sftp, fullPath);
    }
  }
  await rmdirAsync(sftp, dirPath);
};

/**
 * 创建一个新的文件夹对象，之前若存在则删除再创建
 * @param {*} sftp
 * @param {*} path
 */
const mkNewdirAsync = async (sftp, path) => {
  try {
    const files = await readdirAsync(sftp, path);
    console.log(`文件夹存在，删除旧的文件夹，然后创建新的文件夹。---》文件夹下有${files.length}个文件`);
    // await deleteDirectory(sftp, path);
    await sftp.rmdir(path, true); // 递归删除文件夹及其内容
    // await ftpMkdirAsync(sftp, path);
  } catch (error) {
    console.log(`文件夹不存在，创建新的文件夹`);
    // await ftpMkdirAsync(sftp, path);
  }
};

module.exports = {
  unLinkAsync,
  rmdirAsync,
  readdirAsync,
  pipeAsync,
  deleteDirectory,
  mkNewdirAsync,
};
