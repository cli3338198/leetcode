function sortArrayByParityII(nums: number[]): number[] {
    let i = 0, j = 1
    while (i < nums.length && j < nums.length) {
        if (nums[i] % 2 === 0) {
            i += 2
        } else if (nums[j] % 2 !== 0) {
            j += 2
        } else {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            i += 2
            j += 2
        }
    }
    return nums
};