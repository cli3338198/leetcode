function maxProduct(nums: number[]): number {
    const n = nums.length
    let prefix = 0
    let suffix = 0
    let res = -Infinity
    for (let i=0; i < n; i++) {
        prefix = (prefix || 1) * nums[i]
        suffix = (suffix || 1) * nums[n-i-1]
        res = Math.max(res, prefix, suffix)
    }
    return res
};