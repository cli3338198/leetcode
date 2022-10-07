/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0
    let rob2 = 0
    for (const num of nums) {
        const temp = Math.max(rob2, rob1 + num)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};