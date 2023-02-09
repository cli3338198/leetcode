/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums]
    const res = []
    for (let i=0; i < nums.length; i++) {
        for (const sub of permute(nums.slice(0, i).concat(nums.slice(i+1)))) {
            res.push([...sub, nums[i]])
        }
    }
    return res
};

permute = function(nums) {
    const n = nums.length
    const q = [[[], Array(n).fill(false)]]
    for (let i=0; i < n; i++) {
        const len = q.length
        for (let j=0; j < len; j++) {
            const [curList, used] = q.shift()
            for (let k=0; k < n; k++) {
                if (!used[k]) {
                    const copyUsed = used.slice()
                    copyUsed[k] = true
                    q.push([[...curList, nums[k]], copyUsed])
                }
            }
        }
    }
    return q.map(x => x[0])
}