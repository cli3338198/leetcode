/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const map = {"a": 0, "b": 0, "c": 0}
    let l = 0
    let res = 0
    for (let r=0; r < s.length; r++) {
        map[s[r]]++
        while (map['a'] > 0 && map['b'] > 0 && map['c'] > 0) {
            map[s[l]]--
            l++
        }
        res += l
    }
    return res
};