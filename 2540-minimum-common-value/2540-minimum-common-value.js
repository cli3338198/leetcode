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

getCommon = function(nums1, nums2) {
    let i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i]
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return -1
}