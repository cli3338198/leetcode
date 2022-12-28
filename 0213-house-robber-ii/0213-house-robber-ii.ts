function rob(nums: number[]): number {
    const n = nums.length
    if (n === 1) return nums[0]
    return Math.max(helper(nums.slice(0, n-1)), helper(nums.slice(1)))
    
    function helper(nums: number[]): number {
        let rob1 = 0
        let rob2 = 0
        for (const r of nums) {
            const temp = Math.max(rob1 + r, rob2)
            rob1 = rob2
            rob2 = temp
        }
        return rob2
    }
};