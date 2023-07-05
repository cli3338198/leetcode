/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    nums = nums.map(arr => new Set(arr.sort((a, b) => a - b)))
    const res = []
    for (const n of nums[0]) {
        if (nums.every(row => row.has(n))) res.push(n)
    }
    return res
};

intersection = function(nums) {
    nums.forEach(arr => arr.sort((a, b) => a - b))
    const arr = Array(1001).fill(0)
    for (const row of nums) {
        for (let i=0; i < row.length; i++) {
            if (i > 0 && row[i] === row[i-1]) continue
            arr[row[i]]++
        }
    }
    return arr.map((cnt, i) => ([cnt, i])).filter(([cnt, i]) => cnt === nums.length).map(([, i]) => i)
}

intersection = function(nums) {
    const arr = Array(1001).fill(0)
    for (const row of nums) {
        for (const n of row) {
            arr[n]++
        }
    }
    const res = []
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === nums.length) {
            res.push(i)
        }
    }
    return res
}