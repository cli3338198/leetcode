/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) return arr
    const res = [].concat(...arr)
    return flat(res, n-1)
};

flat = function(arr, n) {
    if (n === 0) return arr
    const res = []
    for (const sub of arr) {
        if (Array.isArray(sub)) {
            res.push(...sub)
        } else {
            res.push(sub)
        }
    }
    return flat(res, n-1)
}

flat = function(arr, n) {
    const res = []
    helper(arr, n)
    return res
    
    function helper(arr, n) {
        for (const sub of arr) {
            if (Array.isArray(sub) && n > 0) {
                helper(sub, n-1)
            } else {
                res.push(sub)
            }
        }
    }
}