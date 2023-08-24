function findDuplicates(nums: number[]): number[] {
    const res: number[] = []
    for (const n of nums) {
        if (nums[Math.abs(n)-1] < 0) res.push(Math.abs(n))
        nums[Math.abs(n)-1] *= -1
    }
    return res
};