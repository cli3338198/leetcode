/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const res = []
    for (const [i, n] of nums1) {
        if (i in res) {
            res[i][1] += n
        } else {
            res[i] = [i, n]
        }
    }
    for (const [i, n] of nums2) {
        if (i in res) {
            res[i][1] += n
        } else {
            res[i] = [i, n]
        }
    }
    return res.filter(Boolean)
};