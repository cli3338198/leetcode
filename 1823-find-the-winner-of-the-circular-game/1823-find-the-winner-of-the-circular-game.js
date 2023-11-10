/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const q = []
    for (let i=1; i <= n; i++) {
        q.push(i)
    }
    while (q.length > 1) {
        for (let i=1; i < k; i++) {
            q.push(q.shift())
        }
        q.shift()
    }
    return q[0]
};