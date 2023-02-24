/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return atMostK(k) - atMostK(k-1)
    
    function atMostK(k) {
        let res = 0
        let i = 0
        const map = {}
        for (let j=0; j < nums.length; j++) {
            if (!(nums[j] in map) || (map[nums[j]] === 0)) k--
            map[nums[j]] = map[nums[j]] + 1 || 1
            while (k < 0) {
                map[nums[i]]--
                if (map[nums[i]] === 0) k++
                i++
            }
            res += j - i + 1
        }
        return res
    }
};