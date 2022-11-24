/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    if (n <= 0) return 0
    if (n === 1) return cost[0]
    let cost1 = cost[0]
    let cost2 = cost[1]
    for (let i=2; i < n; i++) {
        [cost1, cost2] = [cost2, Math.min(cost1, cost2) + cost[i]]
    }
    return Math.min(cost1, cost2)
};