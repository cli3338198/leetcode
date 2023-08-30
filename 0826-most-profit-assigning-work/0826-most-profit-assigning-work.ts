function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const jobs: [number, number][] = [], n = difficulty.length
    for (let i=0; i < n; i++) {
        jobs.push([difficulty[i], profit[i]])
    }
    jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    worker.sort((a, b) => a - b)
    let totalProfit = 0, curBest = 0, i = 0
    for (const maxAbility of worker) {
        while (i < n && maxAbility >= jobs[i][0]) {
            curBest = Math.max(curBest, jobs[i][1])
            i++
        }
        totalProfit += curBest
    }
    return totalProfit
};