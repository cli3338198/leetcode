function arithmeticTriplets(nums: number[], diff: number): number {
    const map: Record<string, number> = {}
    let res = 0
    for (let k=0; k < nums.length; k++) {
        const numsj = nums[k] - diff
        const numsi = numsj - diff
        if (numsj in map && numsi in map && map[numsi] < map[numsj] && map[numsj] < k) {
            res++
        }
        map[nums[k]] = k
    }
    return res
};