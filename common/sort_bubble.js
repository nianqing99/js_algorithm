/**
 * 冒泡排序 js
 * @params array
 * @return new sort array
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
bubble(arr); // [1,2,3,4,5,6]
