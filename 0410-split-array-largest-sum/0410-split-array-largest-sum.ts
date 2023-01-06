function splitArray(nums: number[], k: number): number {
    const n = nums.length
    const dp: Record<string, number> = {}
    const suffixSums: number[] = Array(n+1).fill(0)
    for (let i=n-1; i >= 0; i--) {
        suffixSums[i] = suffixSums[i+1] + nums[i]
    }
    return helper(0, k)
    
    function helper(i: number, k: number): number {
        const key = `${i} ${k}`
        if (key in dp) return dp[key]
        if (k === 1) return suffixSums[i]
        let res = Infinity
        let curSum = 0
        for (let j=i; j < n-1; j++) {
            curSum += nums[j]
            res = Math.min(res, Math.max(curSum, helper(j+1, k-1)))
        }
        return dp[key] = res
    }
};