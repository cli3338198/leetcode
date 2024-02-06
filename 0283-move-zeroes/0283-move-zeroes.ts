/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let l = 0
    for (let r=0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[r], nums[l]] = [nums[l], nums[r]]
            if (nums[l] !== 0) {
                l++
            }
        }
    }
};