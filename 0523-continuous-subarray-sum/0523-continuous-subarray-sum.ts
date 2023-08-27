function checkSubarraySum(nums: number[], k: number): boolean {
    const set = new Set()
    let cursum = 0
    for (let i=0; i < nums.length; i++) {
        if (set.has((cursum + nums[i]) % k)) return true
        set.add(cursum % k)
        cursum += nums[i]
    }
    return false
};