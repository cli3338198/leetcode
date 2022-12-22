function jump(nums: number[]): number {
    const n = nums.length
    let l = 0
    let r = 0
    let res = 0
    while (r < n - 1) {
        let maxJump = 0
        for (let i=l; i <= r; i++) {
            maxJump = Math.max(maxJump, i + nums[i])
        }
        l = r + 1
        r = maxJump
        res++
    }
    return res
};