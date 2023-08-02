function searchRange(nums: number[], target: number): number[] {
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === target) {
            let j = i
            while (nums[i] === nums[j]) j++
            return [i, j-1]
        }
    }
    return [-1, -1]
};