/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = {}
    let res = 0
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const sum = n1 + n2
            map[-sum] = map[-sum] + 1 || 1
        }
    }
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const sum = n3 + n4
            if (sum in map) {
                res += map[sum]
            }
        }
    }
    return res
};