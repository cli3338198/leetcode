/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const res = []
    let i = 0
    let j = 1
    for (const num of nums) {
        if (num > 0) {
            res[i] = num
            i += 2
        } else {
            res[j] = num
            j += 2
        }
    }
    return res
};

rearrangeArray = function(nums) {
    let outOfPlace = -1
    for (let i=0; i < nums.length; i++) {
        if (outOfPlace !== -1) {
            if ((nums[i] >= 0 && nums[outOfPlace] < 0) || (nums[i] < 0 && nums[outOfPlace] >= 0)) {
                rightRotate(outOfPlace, i)
                if (i - outOfPlace > 2) {
                    outOfPlace += 2
                } else {
                    outOfPlace = -1
                }
            }
        }
        if (outOfPlace === -1) {
            if ((nums[i] >= 0 && i % 2 !== 0) || (nums[i] < 0 && i % 2 === 0)) {
                outOfPlace = i
            }
        }
    }
    return nums
    
    function rightRotate(outOfPlace, cur) {
        const temp = nums[cur]
        for (let i=cur; i > outOfPlace; i--) {
            nums[i] = nums[i-1]
        }
        nums[outOfPlace] = temp
    }
}