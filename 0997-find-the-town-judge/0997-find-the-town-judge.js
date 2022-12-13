/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n === 1) return 1
    const p = Array(n+1).fill(0).map(() => [0, 0])
    for (const [a, b] of trust) {
        p[b][1]++
        p[a][0]++
    }
    for (let i=0; i <= n; i++) {
        const [noTrusts, noTrustedBy] = p[i]
        if (noTrusts === 0 && noTrustedBy === n-1) return i
    }
    return -1
};