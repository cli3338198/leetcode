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
    console.log(nums)
    const arr = Array(1001).fill(0)
    for (const row of nums) {
        for (let i=0; i < row.length; i++) {
            if (i > 0 && row[i] === row[i-1]) continue
            arr[row[i]]++
        }
    }
    console.log(arr)
    return arr.map((cnt, i) => ([cnt, i])).filter(([cnt, i]) => cnt === nums.length).map(([, i]) => i)
}