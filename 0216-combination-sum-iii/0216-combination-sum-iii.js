/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = []
    helper(1, n, [])
    return res
    
    function helper(idx, sum, list) {
        if (list.length === k && sum === 0) {
            return res.push(list)
        }
        for (let i=idx; i <= 9; i++) {
            if (i <= sum) {
                helper(i+1, sum - i, [...list, i])
            }
        }
    }
};