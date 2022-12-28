function rob(nums: number[]): number {
    let rob1 = 0
    let rob2 = 0
    for (const n of nums) {
        const temp = Math.max(rob1 + n, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};