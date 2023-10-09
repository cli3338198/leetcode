/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    const n = rating.length
    const up = Array(n).fill(0)
    const down = Array(n).fill(0)
    let res = 0
    for (let i=0; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (rating[i] < rating[j]) {
                up[i]++
                res += up[j]
            } else {
                down[i]++
                res += down[j]
            }
        }
    }
    return res    
};

numTeams = function(rating) {
    const n = rating.length
    const dp = Array(n).fill(0).map(() => ([0, 0]))
    let res = 0
    for (let i=0; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (rating[i] < rating[j]) {
                dp[i][0]++
                res += dp[j][0]
            } else {
                dp[i][1]++
                res += dp[j][1]
            }
        }
    }
    return res
}