/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [Array.from(new Set(nums1.filter(n => !nums2.includes(n)))), Array.from(new Set(nums2.filter(n => !nums1.includes(n))))]
};

findDifference = function(nums1, nums2) {
    const s1 = new Set(nums1)
    const s2 = new Set(nums2)
    const res1 = []
    for (const n of s1) {
        if (!s2.has(n)) res1.push(n)
    }
    const res2 = []
    for (const n of s2) {
        if (!s1.has(n)) res2.push(n)
    }
    return [res1, res2]
}