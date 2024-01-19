/**
 * node打印等待效果
 * @param {*} text
 * @param {*} endText
 * @returns
 */
function printLoading(text, endText = '') {
  const waitingChars = ['|', '/', '-', '\\']; // 等待效果的字符
  let index = 0;

  const interval = setInterval(() => {
    process.stdout.write(`\r${waitingChars[index]} ${text}...`); // 使用\r回车符实现动态更新
    index = (index + 1) % waitingChars.length;
  }, 200); // 每200毫秒更新一次

  const closeLoading = () => {
    clearInterval(interval);
    process.stdout.write(`${endText}!       \n`); // 打印完成消息
  };
  return { close: closeLoading };
}

module.exports = printLoading;
