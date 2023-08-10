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

partitionLabels = function(s) {
    const map = {}
    for (let i=0; i < s.length; i++) {
        map[s[i]] = i
    }
    let start = 0
    let end = 0
    const res = []
    for (let i=0; i < s.length; i++) {
        end = Math.max(end, map[s[i]])
        if (i === end) {
            res.push(end - start + 1)
            start = i + 1
        }
    }
    return res
}
