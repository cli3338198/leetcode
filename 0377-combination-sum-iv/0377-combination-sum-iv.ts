function combinationSum4(nums: number[], target: number): number {
    const dp: Record<string, number> = {}
    return helper(target)
    
    function helper(target: number): number {
        if (target === 0) return 1
        if (target in dp) return dp[target]
        let res = 0
        for (const n of nums) {
            if (n <= target) {
                res += helper(target - n)
            }
        }
        return dp[target] = res
    }
};