/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums]
    const res = []
    for (let i=0; i < nums.length; i++) {
        for (const sub of permute(nums.slice(0, i).concat(nums.slice(i+1)))) {
            res.push([nums[i], ...sub])
        }
    }
    return res
};

permute = function(nums) {
    const q = [[[], Array(nums.length).fill(false)]]
    for (let i=1; i <= nums.length; i++) {
        const len = q.length
        for (let j=0; j < len; j++) {
            const [curList, used] = q.shift()
            for (let k=0; k < nums.length; k++) {
                if (!used[k]) {
                    used[k] = true
                    q.push([[...curList, nums[k]], used.slice()])
                    used[k] = false
                }
            }
        }
    }
    return q.map(x => x[0])
}