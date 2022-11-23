/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    const n = nums.length
    let res = 0
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            for (let k=j+1; k < n; k++) {
                for (let l=k+1; l < n; l++) {
                    if (nums[i] + nums[j] + nums[k] === nums[l]) {
                        res++
                    }
                }
            }
        }
    }
    return res
};