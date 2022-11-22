/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    return nums.reduce((acc, val) => {
        if (val <= acc[0]) {
            acc[0] = val
        } else if (val <= acc[1]) {
            acc[1] = val
        } else {
            return [...acc, val]
        }
        return acc
    }, [Infinity, Infinity]).length >= 3
};