/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {}
    for (let i=0; i < s.length; i++) {
        if (s[i] in map && map[s[i]] !== t[i]) return false
        map[s[i]] = t[i]
    }
    [s, t] = [t, s]
    map = {}
    for (let i=0; i < s.length; i++) {
        if (s[i] in map && map[s[i]] !== t[i]) return false
        map[s[i]] = t[i]
    }
    return true
};