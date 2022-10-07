/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = {}
    const map2 = {}
    for (let i=0; i < s.length; i++) {
        if (s[i] in map1 && map1[s[i]] !== t[i]) return false
        map1[s[i]] = t[i]
        if (t[i] in map2 && map2[t[i]] !== s[i]) return false
        map2[t[i]] = s[i]
    }
    return true
};