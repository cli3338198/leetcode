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

answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b)
    const res = []
    for (let i=1; i < nums.length; i++) {
        nums[i] += nums[i-1]
    }
    for (const q of queries) {
        res.push(binSearch(q))
    }
    return res
        
    function binSearch(sum) {
        let l = 0
        let r = nums.length-1
        while (l < r) {
            const m = Math.floor((l+r)/2)
            const curSum = nums[m]
            if (curSum === sum) {
                return m + 1
            } else if (curSum > sum) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return nums[l] > sum ? l : l + 1
    }
}