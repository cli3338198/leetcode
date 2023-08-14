function rearrangeArray(nums: number[]): number[] {
    let outOfPlace = -1
    for (let i=0; i < nums.length; i++) {
        if (outOfPlace !== -1) {
            if ((nums[i] < 0 && nums[outOfPlace] >= 0) || (nums[i] > 0 && nums[outOfPlace] < 0)) {
                rightRotate(outOfPlace, i)
                if (i - outOfPlace > 2) {
                    outOfPlace += 2
                } else {
                    outOfPlace = -1
                }
            }
        }
        if (outOfPlace === -1) {
            if ((nums[i] < 0 && i % 2 === 0) || (nums[i] >= 0 && i % 2 !== 0)) {
                outOfPlace = i
            }
        }
    }
    return nums
    
    function rightRotate(outOfPlace: number, i: number): void {
        const temp = nums[i]
        for (i; i > outOfPlace; i--) {
            nums[i] = nums[i-1]
        }
        nums[outOfPlace] = temp
    }
};