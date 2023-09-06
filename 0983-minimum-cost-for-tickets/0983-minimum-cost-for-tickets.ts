function mincostTickets(days: number[], costs: number[]): number {
    const dp: number[] = Array(366).fill(Infinity)
    dp[0] = 0
    for (let day=1; day <= 366; day++) {
        if (!days.includes(day)) {
            dp[day] = dp[day-1]
            continue
        }
        dp[day] = Math.min(dp[day], costs[0] + dp[Math.max(0, day-1)])
        dp[day] = Math.min(dp[day], costs[1] + dp[Math.max(0, day-7)])
        dp[day] = Math.min(dp[day], costs[2] + dp[Math.max(0, day-30)])
    }
    return dp[366]
};