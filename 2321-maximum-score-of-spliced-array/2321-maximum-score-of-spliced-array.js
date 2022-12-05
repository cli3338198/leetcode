/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
    const n = nums1.length
    let sum1 = 0
    let sum2 = 0
    for (let i=0; i < n; i++) {
        sum1 += nums1[i]
        sum2 += nums2[i]
    }
    const diff = []
    let max = 0
    let cur = 0
    for (let i=0; i < n; i++) {
        diff[i] = nums2[i] - nums1[i]
    }
    for (const el of diff) {
        cur = Math.max(el, cur + el)
        max = Math.max(max, cur)
    }
    sum1 += max
    max = 0
    cur = 0
    for (let i=0; i < n; i++) {
        diff[i] = nums1[i] - nums2[i]
    }
    for (const el of diff) {
        cur = Math.max(el, cur + el)
        max = Math.max(max, cur)
    }
    sum2 += max
    return Math.max(sum1, sum2)
};