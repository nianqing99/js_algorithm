/**
 * @description: 插入排序 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 *
 */
let arr = [6, 5, 4, 3, 2, 1];
function insert(data) {
  for (let i = 1; i < data.length; i++) {
    let preIndex = i - 1;
    let current = data[i];
    while (preIndex >= 0 && data[preIndex] > current) {
      data[preIndex + 1] = data[preIndex];
      preIndex--;
    }
    data[preIndex + 1] = current;
  }
  return data;
}
insert(arr);
