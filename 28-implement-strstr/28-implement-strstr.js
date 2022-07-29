/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return 0
    let p1 = 0
    let p2 = 0
    while (p1 < haystack.length) {
        if (haystack[p1] === needle[p2]) {
            p2++
        } else {
            p1 = p1 - p2
            p2 = 0
        }
        p1++
        if (p2 === needle.length) {
            return p1 - p2
        }
    }
    return -1
};