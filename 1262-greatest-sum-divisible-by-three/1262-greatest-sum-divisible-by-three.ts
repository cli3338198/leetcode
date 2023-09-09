function maxSumDivThree(nums: number[]): number {
    let dp: [number, number, number] = [0, 0, 0]
    for (let i=1; i <= nums.length; i++) {
        const nextDp = dp.slice() as [number, number, number]
        for (let j=0; j < 3; j++) {
            const sum = dp[j] + nums[i-1]
            const mod = sum % 3
            nextDp[mod] = Math.max(nextDp[mod], sum)
        }
        dp = nextDp
    }
    return dp[0]
};