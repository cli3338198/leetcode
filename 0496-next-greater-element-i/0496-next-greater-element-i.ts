function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack: number[] = []
    const map: Record<string, number> = {}
    for (const n of nums2) {
        while (stack.length && n > stack.at(-1)) {
            map[stack.pop()] = n
        }
        stack.push(n)
    }
    const ans: number[] = []
    for (const n of nums1) {
        ans.push(map[n] || -1)
    }
    return ans
};