/**
 * @description: 希尔排序 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 */
let arr = [6, 5, 4, 3, 2, 1];
function hill(data) {
    let gap = 1;
    while (gap < data.length / 2) {
        gap = gap * 2 + 1;
    }
    while (gap >= 1) {
        for (var i = 0; i < len; i++) {      //插入排序
            for (j = i; j >= gap && data[j] < data[j - gap]; j -= gap) {
                //类似冒泡排序中的交换位置
                var temp =  data[j-gap]
                data[j- gap] = data[j]
                data[j] = temp
            }
        }
        gap = (gap-1)/3;
    }
    return data;
}
hill(arr);