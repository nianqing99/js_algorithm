/**
 * @description: 冒泡排序 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 * 从0不断与下一个元素进行比较，每轮实际上会把最大的放到最后，
 * 这样二次比较实际长度实际可以减去已经排好的 i 值，不断循环，
 * 直到data.length-1，算法时间复杂度为 O(n^2) 空间复杂度O(1)
 * 最好时间复杂度O(n),只一轮就完成排序。
 */ 
let arr = [6, 5, 4, 3, 2, 1];
function bubble(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        var temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return data;
}
bubble(arr); 