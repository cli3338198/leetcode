/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length
    const map = {}
    let sum = 0
    let size = Infinity
    let res = Infinity
    map[0] = -1
    for (let i=0; i < n; i++) {
        sum += arr[i]
        map[sum] = i
    }
    sum = 0
    for (let i=0; i < n; i++) {
        sum += arr[i]
        if ((sum - target) in map) {
            size = Math.min(size, i - map[sum - target])
        }
        if ((sum + target) in map && size < Infinity) {
            res = Math.min(res, map[sum + target] - i + size)
        }
    }
    return res === Infinity ? -1 : res
};

minSumOfLengths = function(arr, target) {
    const n = arr.length
    const best = Array(n).fill(Infinity)
    let res = Infinity
    let bestSoFar = Infinity
    let sum = 0
    let start = 0
    for (let i=0; i < n; i++) {
        sum += arr[i]
        while (sum > target) {
            sum -= arr[start]
            start++
        }
        if (sum === target) {
            if (start > 0 && best[start - 1] !== Infinity) {
                res = Math.min(res, best[start - 1] + i - start + 1)
            }
            bestSoFar = Math.min(bestSoFar, i - start + 1)
        }
        best[i] = bestSoFar
    }
    return res === Infinity ? -1 : res
}

minSumOfLengths = function(arr, target) {
    return helper(arr, target, 2)
    
    function helper(arr, target, k) {
        const n = arr.length
        const dp = Array(n+1).fill(0).map(() => Array(k+1).fill(Infinity))
        const prefixSums = {}
        prefixSums[0] = 0
        for (let i=0; i <= n; i++) {
            dp[i][0] = 0
        }
        let sum = 0
        for (let i=1; i <= n; i++) {
            let d = -1
            sum += arr[i-1]
            prefixSums[sum] = i
            if (sum - target in prefixSums) {
                d = prefixSums[sum - target]
            }
            for (let j=1; j <= k; j++) {
                dp[i][j] = Math.min(dp[i][j], dp[i-1][j])
                if (d !== -1) {
                    dp[i][j] = Math.min(dp[i][j], dp[d][j-1] + i - d)
                }
            }
        }
        return dp[n][k] === Infinity ? -1 : dp[n][k]
    }
}