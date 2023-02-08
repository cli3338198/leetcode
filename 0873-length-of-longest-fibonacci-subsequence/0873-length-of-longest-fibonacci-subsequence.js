/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length
    const set = new Set(arr)
    let res = 0
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            let a = arr[i]
            let b = arr[j]
            let k = 2
            for (k; set.has(a + b); k++) {
                [a, b] = [b, a + b]
            }
            res = Math.max(res, k)
        }
    }
    return res > 2 ? res : 0
};

lenLongestFibSubseq = function(arr) {
    const n = arr.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(2))
    const map = {}
    let res = 0
    for (let i=0; i < n; i++) {
        map[arr[i]] = i
    }
    for (let i=0; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (arr[i] - arr[j] < arr[j] && (arr[i] - arr[j]) in map) {
                const k = map[arr[i] - arr[j]]
                dp[j][i] = Math.max(dp[j][i], 1 + dp[k][j])
            }
            res = Math.max(res, dp[j][i])
        }
    }
    return res > 2 ? res : 0
}

lenLongestFibSubseq = function(arr) {
    const n = arr.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(2))
    const map = {}
    let res = 0
    for (let i=0; i < n; i++) {
        map[arr[i]] = i
        for (let j=0; j < i; j++) {
            if (arr[i] - arr[j] < arr[j] && arr[i] - arr[j] in map) {
                const k = map[arr[i] - arr[j]]
                dp[j][i] = Math.max(dp[j][i], 1 + dp[k][j])
            }
            res = Math.max(res, dp[j][i])
        }
    }
    return res > 2 ? res : 0
}