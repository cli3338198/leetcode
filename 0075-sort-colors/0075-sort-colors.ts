/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let a = 0, b = 0, c = nums.length-1
    while (b <= c) {
        if (nums[b] === 0) {
            [nums[a], nums[b]] = [nums[b], nums[a]]
            a++
        } else if (nums[b] === 2) {
            [nums[b], nums[c]] = [nums[c], nums[b]]
            b--
            c--
        }
        b++
    }
};