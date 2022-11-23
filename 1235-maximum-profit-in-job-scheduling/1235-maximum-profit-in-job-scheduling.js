/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
class Job {
    constructor(startTime, endTime, profit) {
        this.startTime = startTime
        this.endTime = endTime
        this.profit = profit
    }
}

var jobScheduling = function(startTime, endTime, profit) {
    const n = startTime.length
    const jobs = []
    for (let i=0; i < n; i++) {
        jobs.push(new Job(startTime[i], endTime[i], profit[i]))
    }
    jobs.sort((a, b) => a.endTime - b.endTime)
    const dp = Array(n).fill(0)
    dp[0] = jobs[0].profit
    for (let i=1; i < n; i++) {
        let curProfit = jobs[i].profit
        for (let j=i-1; j >= 0; j--) {
            if (jobs[j].endTime <= jobs[i].startTime) {
                curProfit += dp[j]
                break
            }
        }
        dp[i] = Math.max(dp[i-1], curProfit)
    }
    return dp[n-1]
};