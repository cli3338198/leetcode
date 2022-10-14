/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const counts = count(nums)
    nums = Array.from(new Set(nums)).sort((a, b) => a - b)
    let earn1 = 0
    let earn2 = 0
    for (let i=0; i < nums.length; i++) {
        const curEarn = nums[i] * counts[nums[i]]
        if (i > 0 && nums[i]-1 === nums[i-1]) {
            const temp = earn2
            earn2 = Math.max(curEarn + earn1, earn2)
            earn1 = temp
        } else {
            const temp = earn2
            earn2 = curEarn + earn2
            earn1 = temp
        }
    }
    return earn2
};

function count(nums) {
    const map = {}
    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }
    return map
}