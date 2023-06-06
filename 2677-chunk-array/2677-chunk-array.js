/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const res = []
    for (const n of arr) {
        if (!res.length || res[res.length-1].length === size) {
            res.push([n])
        } else {
            res[res.length-1].push(n)
        }
    }
    return res
};
