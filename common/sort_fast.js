/**
 * @description: 快速排序 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 * 将第一个元素作为基准base，分别找出left，right，
 * 划分为左边都是小于base，右边都是大于base的部分
 * 递归处理left，right
 * 合并后得出结果
 * 时间复杂度O(n),空间复杂度O(log2n))
 */
let arr = [6, 5, 4, 3, 2, 1];
function fast(data) {
  let right = [],
    left = [],
    keys = data.shift();
  for (let value of data) {
    if (value > keys) {
      right.push(value);
    } else {
      left.push(value);
    }
  }
  return fast(left).concat(keys, fast(right));
}
fast(arr);
