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

getCommon = function(nums1, nums2) {
    for (const n of nums1) {
        let l = 0, r = nums2.length-1
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            if (nums2[m] === n) {
                return n
            } else if (nums2[m] < n) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
}