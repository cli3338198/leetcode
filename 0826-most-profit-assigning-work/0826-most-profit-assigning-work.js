/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const zipped = [], n = difficulty.length
    for (let i=0; i < n; i++) {
        zipped.push([difficulty[i], profit[i]])
    }
    zipped.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let totalProfit = 0
    for (const maxDifficulty of worker) {
        let curProfit = 0
        for (const [diff, profit] of zipped) {
            if (diff <= maxDifficulty) {
                curProfit = Math.max(curProfit, profit)
            }
        }
        totalProfit += curProfit
    }
    return totalProfit
};

maxProfitAssignment = function(difficulty, profit, worker) {
    const zipped = [], n = difficulty.length
    for (let i=0; i < n; i++) {
        zipped.push([difficulty[i], profit[i]])
    }
    zipped.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    worker.sort((a, b) => a - b)
    let totalProfit = 0, i = 0, bestProfit = 0
    for (const maxAbility of worker) {
        while (i < n && maxAbility >= zipped[i][0]) {
            bestProfit = Math.max(bestProfit, zipped[i][1])
            i++
        }
        totalProfit += bestProfit
    }
    return totalProfit
}