type TDp = [number[], Set<number>]

function permute(nums: number[]): number[][] {
    const n = nums.length
    const dp: TDp[][] = Array(n+1).fill(0).map(() => ([] as unknown as TDp[]))
    dp[1] = nums.map((n, i) => ([[n], new Set([i])]))
    for (let len=2; len <= n; len++) {
        for (const [list, set] of dp[len-1]) {
            for (let i=0; i < n; i++) {
                if (!set.has(i)) {
                    const newSet = new Set(Array.from(set))
                    newSet.add(i)
                    dp[len].push([[...list, nums[i]], newSet])
                }
            }
        }
    }
    return dp[n].map((x) => x[0])
};