function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1), set2 = new Set(nums2), res: number[] = []
    for (const n of set1) {
        if (set2.has(n)) {
            res.push(n)
        }
    }
    return res
};