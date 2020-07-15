/**
 * @description: 选择 js
 * @param {Array} [6, 5, 4, 3, 2, 1]
 * @return: [1,2,3,4,5,6]
 */
let arr = [6, 5, 4, 3, 2, 1];
function select(data) {
    for (let i = 0; i < data.length -1; i++) {
        let min = Math.min(...data.slice(i));
        let index = data.indexOf(min)
        let temp = data[i]; 
        data[i] = data[index];
        data[index] = temp;
    }
    return data;
}
select(arr);