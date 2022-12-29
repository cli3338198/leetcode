/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort(([a, b], [c, d]) => a - c || d - b)
    const dp = []
    for (const e of envelopes) {
        const idx = binarySearch(dp, e)
        if (idx === -1) {
            dp.push(e)
        } else {
            dp[idx] = e
        }
    }
    return dp.length
    
    function binarySearch(dp, e) {
        let l = 0
        let r = dp.length-1
        let res = -1
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            if (dp[m][1] >= e[1]) {
                res = m
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return res
    }
};