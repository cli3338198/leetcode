function countCompleteSubarrays(nums: number[]): number {
    let size = (new Set(nums)).size, l = 0, res = 0
    const map: Record<string, number> = {}
    for (let r=0; r < nums.length; r++) {
        map[nums[r]] = map[nums[r]] + 1 || 1
        if (map[nums[r]] === 1) size--
        while (size === 0) {
            map[nums[l]]--
            if (map[nums[l++]] === 0) size++
        }
        res += l
    }
    return res
};