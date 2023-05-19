/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0, neg = 0
    for (const num of nums) {
        if (num > 0) {
            pos++
        } else if (num < 0) {
            neg++
        }
    }
    return Math.max(pos, neg)
};

maximumCount = function(nums) {
    return Math.max(...nums.reduce(reducer, [0, 0]))
    
    function reducer(acc, val) {
        if (val > 0) {
            acc[0]++
        } else if (val < 0) {
            acc[1]++
        }
        return acc
    }
}