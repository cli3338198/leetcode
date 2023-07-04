/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b)
    const res = []
    for (let q of queries) {
        let cnt = 0
        for (const n of nums) {
            if (n <= q) {
                cnt++
                q -= n
            } else {
                break
            }
        }
        res.push(cnt)
    }
    return res
};