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

chunk = function(arr, size) {
    const res = []
    while (arr.length) {
        res.push(arr.splice(0, size))
    }
    return res
}

chunk = function(arr, size) {
    return arr.reduce((acc, val) => {
        if (!acc.length || acc[acc.length-1].length === size) {
            acc.push([val])
        } else {
            acc[acc.length-1].push(val)
        }
        return acc
    }, [])
}