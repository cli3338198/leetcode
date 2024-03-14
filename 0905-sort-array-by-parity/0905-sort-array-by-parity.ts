function sortArrayByParity(nums: number[]): number[] {
    let left = 0, right = nums.length - 1
    while (left < right) {
        if (nums[left] % 2 === 0) {
            left++
        } else if (nums[right] % 2 !== 0) {
            right--
        } else {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
    return nums
    
    //
    
    let i = 0
    for (let j=0; j < nums.length; j++) {
        if (nums[j] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    return nums
};