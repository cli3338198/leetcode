/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const set = new Set(nums)
    for (const n of nums) {
        set.add(reverse(n))
    }
    return set.size
    
    function reverse(n) {
        return Number((String(n)).split("").reverse().join(""))
    }
};