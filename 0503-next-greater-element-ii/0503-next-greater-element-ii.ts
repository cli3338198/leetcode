function nextGreaterElements(nums: number[]): number[] {
    const map: Record<string, number> = {}
    const stack: number[] = []
    const res: number[] = []
    const n = nums.length
    nums = nums.concat(nums)
    for (let i=0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack.at(-1)]) {
            map[stack.pop()] = i
        }
        stack.push(i)
    }
    for (let i=0; i < n; i++) {
        res[i] = i in map ? nums[map[i]] : -1
    }
    return res
};