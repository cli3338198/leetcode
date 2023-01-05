/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n in dp) return dp[n]
        if (n === 1) return 0
        let res = Infinity
        if (n % 2 === 0) {
            res = Math.min(res, 1 + helper(n/2))
        } else {
            res = Math.min(res, 1 + Math.min(helper(n-1), helper(n+1)))
        }
        return dp[n] = res
    }
};

integerReplacement = function(n) {
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 1
    dp[1] = 0
    for (let i=2; i <= n; i++) {
        if (i % 2 === 0) {
            dp[i] = 1 + dp[i/2]
        } else {
            dp[i] = 1 + Math.min(1 + dp[(i+1)/2], dp[i-1])
        }
    }
    return dp[n]
}

integerReplacement = function(n) {
    const q = [[n, 0]]
    while (q.length) {
        const [n, res] = q.shift()
        if (n === 1) return res
        if (n % 2 === 0) {
            q.push([n/2, res + 1])
        } else {
            q.push([n+1, res + 1])
            q.push([n-1, res + 1])
        }
    }
}