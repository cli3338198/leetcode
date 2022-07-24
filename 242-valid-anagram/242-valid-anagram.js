/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("").sort()
    t = t.split("").sort()
    return JSON.stringify(s) === JSON.stringify(t)
};