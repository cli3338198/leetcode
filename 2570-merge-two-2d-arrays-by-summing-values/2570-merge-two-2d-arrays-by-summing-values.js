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

mergeArrays = function(nums1, nums2) {
    let i = 0
    let j = 0
    const res = []
    while (i < nums1.length && j < nums2.length) {
        const [idx1, num1] = nums1[i]
        const [idx2, num2] = nums2[j]
        if (idx1 === idx2) {
            res.push([idx1, num1 + num2])
            i++
            j++
        } else if (idx1 < idx2) {
            res.push([idx1, num1])
            i++
        } else {
            res.push([idx2, num2])
            j++
        }
    }
    while (i < nums1.length) {
        res.push(nums1[i++])
    }
    while (j < nums2.length) {
        res.push(nums2[j++])
    }
    return res
}