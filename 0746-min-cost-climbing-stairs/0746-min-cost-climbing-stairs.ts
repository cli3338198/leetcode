function minCostClimbingStairs(cost: number[]): number {
    const dp: number[] = [cost[0], cost[1]]
    for (let i=2; i < cost.length; i++) {
        dp.push(Math.min(dp.at(-1), dp.at(-2)) + cost[i])
    }
    return Math.min(dp.at(-1), dp.at(-2))
};