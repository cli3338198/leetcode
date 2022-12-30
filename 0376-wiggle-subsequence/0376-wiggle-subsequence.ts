function wiggleMaxLength(nums: number[]): number {
    let up = 1
    let down = 1
    for (let i=0; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            up = down + 1
        } else if (nums[i] > nums[i-1]) {
            down = up + 1
        }
    }
    return Math.max(up, down)
};