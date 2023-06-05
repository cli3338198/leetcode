/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let res = 0, left = 0, right = nums.length-1
    while (left <= right) {
        if (left === right) {
            res += nums[left]
        } else {
            res += Number(helper(nums[left]) + helper(nums[right]))            
        }
        left++
        right--
    }
    return res
    
    function helper(num) {
        let res = ''
        while (num) {
            res = (num % 10) + res
            num = Math.floor(num / 10)
        }
        return res
    }
};