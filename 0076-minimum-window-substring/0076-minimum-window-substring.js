/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = {}
    for (const char of t) {
        map[char] = map[char] + 1 || 1
    }
    let remain = t.length
    let l = 0
    let r = 0
    let start = 0
    let len = Infinity
    while (r < s.length) {
        if (map[s[r]] > 0) remain--
        map[s[r]]--
        r++
        while (l < r && remain === 0) {
            if (r - l < len) {
                len = r - l
                start = l
            }
            map[s[l]]++
            if (map[s[l]] > 0) remain++
            l++
        }
    }
    return len === Infinity ? "" : s.substring(start, start+len)
};