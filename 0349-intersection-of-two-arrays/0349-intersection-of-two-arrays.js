/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let i = 0, j = 0, res = []
    while (i in nums1 && j in nums2) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i])
            i++
            j++
            while (i in nums1 && nums1[i] === nums1[i-1]) i++
            while (j in nums2 && nums2[j] === nums2[j-1]) j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return res
};

intersection = function(nums1, nums2) {
    nums2 = new Set(nums2)
    const set = new Set()
    for (const n of nums1) {
        if (nums2.has(n)) set.add(n)
    }
    return Array.from(set)
}