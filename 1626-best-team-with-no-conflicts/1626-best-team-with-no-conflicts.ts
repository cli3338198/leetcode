function bestTeamScore(scores: number[], ages: number[]): number {
    const n = scores.length
    const mapped: number[][] = ages.map((age, i) => ([scores[i], age])).sort(([s1, a1], [s2, a2]) => s1 - s2 || a1 - a2)
    const dp: number[] = Array(scores.length).fill(0).map((_,i) => mapped[i][0])
    for (let i=1; i < n; i++) {
        const [s1, a1] = mapped[i]
        for (let j=0; j < i; j++) {
            const [s0, a0] = mapped[j]
            if (a1 >= a0) {
                dp[i] = Math.max(dp[i], s1 + dp[j])
            }
        }
    }
    return Math.max(...dp)
};