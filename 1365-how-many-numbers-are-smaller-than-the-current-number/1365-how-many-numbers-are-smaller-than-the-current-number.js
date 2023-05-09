/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const map = {}
    for (const n of nums) {
        map[n] = map[n] + 1 || 1
    }
    return nums.map(helper)
    
    function helper(num) {
        let cnt = 0
        for (const n in map) {
            if (n < num) cnt += map[n]
        }
        return cnt
    }
};