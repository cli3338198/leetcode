/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const arr = Array(26).fill(0)
    for (let i=0; i < s.length; i++) {
        arr[s[i].charCodeAt(0)-97] = i
    }
    let j = 0
    let k = 0
    const res = []
    for (let i=0; i < s.length; i++) {
        j = Math.max(j, arr[s[i].charCodeAt(0)-97])
        if (i === j) {
            res.push(i - k + 1)
            k = i + 1
        }
    }
    return res
};