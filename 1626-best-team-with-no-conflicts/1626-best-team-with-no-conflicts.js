/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    ages = ages.map((age, i) => ([scores[i], age])).sort(([s1, a1], [s2, a2]) => s1 - s2 || a1 - a2)
    const dp = Array(ages.length).fill(0).map((_,i) => ages[i][0])
    for (let i=1; i < ages.length; i++) {
        const [s1, a1] = ages[i]
        for (let j=0; j < i; j++) {
            const [s0, a0] = ages[j]
            if (a1 >= a0) {
                dp[i] = Math.max(dp[i], s1 + dp[j])
            }
        }
    }
    return Math.max(...dp)
};


