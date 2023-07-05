/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    nums2 = new Set(nums2)
    for (const n of nums1) {
        if (nums2.has(n)) return n
    }
    return -1
};