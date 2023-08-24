function countPairs(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    let l = 0, r = nums.length-1, res = 0
    while (l < r) {
        if (nums[l] + nums[r] < target) {
            res += r - l
            l++
        } else {
            r--
        }
    }
    return res
};