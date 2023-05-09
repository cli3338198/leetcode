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

smallerNumbersThanCurrent = function(nums) {
    const res = []
    for (let i=0; i < nums.length; i++) {
        let cnt = 0
        for (let j=0; j < nums.length; j++) {
            if (nums[j] < nums[i]) cnt++
        }
        res.push(cnt)
    }
    return res
}

smallerNumbersThanCurrent = function(nums) {
    const numbers = Array(101).fill(0)
    for (const n of nums) {
        numbers[n]++
    }
    for (let i=1; i < numbers.length; i++) {
        numbers[i] += numbers[i-1]
    }
    return nums.map(n => n === 0 ? 0 : numbers[n-1])
}