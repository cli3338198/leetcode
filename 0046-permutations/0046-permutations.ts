function permute(nums: number[]): number[][] {
    const dp: Record<string, number[][]> = {}
    return helper(nums)
    
    function helper(nums) {
        if (nums.length === 1) return [nums]
        if (nums.toString() in dp) return dp[nums.toString()]
        const res: number[][] = []
        for (let i=0; i < nums.length; i++) {
            for (const j of helper(nums.slice(0, i).concat(nums.slice(i+1)))) {
                res.push([nums[i], ...j])
            }
        }
        return dp[nums.toString()] = res
    }
};