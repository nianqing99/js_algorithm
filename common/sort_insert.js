/**
 * @description: 插入排序 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 * 
 */
let arr = [6, 5, 4, 3, 2, 1];
function insert(data) {
  for (let i = 1; i < data.length; i++) {
    let j = i - 1;
    if (data[i] < data[j]) {
      let temp = data[i];
      while (j >= 0 && temp < data[j]) {
        data[j + 1] = data[j];
        j--;
      }
      data[j + 1] = temp;
    }
  }
  return data;
}
insert(arr);
