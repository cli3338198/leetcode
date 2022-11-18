/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    const n = arr.length
    let res = 0
    let up = 0
    let down = 0
    for (let i=1; i < n; i++) {
        if ((down > 0 && arr[i-1] < arr[i]) || (arr[i-1] === arr[i])) {
            up = 0
            down = 0
        } 
        if (arr[i-1] < arr[i]) {
            up++
        }
        if (arr[i] > arr[i+1]) {
            down++
        }
        if (up > 0 && down > 0) {
            res = Math.max(res, up + down + 1)
        }
    }
    return res
};