function searchRange(nums: number[], target: number): number[] {
    let l = 0, r = nums.length-1
    while (l <= r) {
        const m = Math.floor((l+r)/2)
        if (nums[m] === target) {
            l = m, r = m
            while (nums[l] === nums[m]) l--
            while (nums[r] === nums[m]) r++
            return [l+1, r-1]
        } else if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return [-1, -1]
    
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === target) {
            let j = i
            while (nums[i] === nums[j]) j++
            return [i, j-1]
        }
    }
    return [-1, -1]
};