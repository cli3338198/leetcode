/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b)
    let minDiff = Infinity
    let res = []
    for (let i=0; i < arr.length-1; i++) {
        const diff = arr[i+1] - arr[i]
        if (diff < minDiff) {
            minDiff = diff
            res = [[arr[i], arr[i+1]]]
        } else if (diff === minDiff) {
            res.push([arr[i], arr[i+1]])
        }
    }
    return res
};