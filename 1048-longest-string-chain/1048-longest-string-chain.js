/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length)
    const n = words.length
    const dp = Array(n).fill(1)
    let res = 1
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (isValid(words[j], words[i])) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};

function isValid(w1, w2) {
    if (w1.length === w2.length || Math.abs(w1.length - w2.length) > 1) return false
    let a = 0
    let b = 0
    let count = 0
    while (a < w1.length && b < w2.length) {
        if (w1[a] !== w2[b]) {
            count++
            if (w1.length > w2.length) {
                a++
            } else {
                b++
            }
        } else {
            a++
            b++
        }
        if (count > 1) return false
    }
    return true
}