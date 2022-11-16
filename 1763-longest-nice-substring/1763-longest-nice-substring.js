/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if (s.length < 2) return ""
    const set = new Set()
    for (const c of s) {
        set.add(c)
    }
    for (let i=0; i < s.length; i++) {
        const c = s[i]
        if (!set.has(c.toUpperCase()) || !set.has(c.toLowerCase())) {
            const sub1 = longestNiceSubstring(s.substring(0, i))
            const sub2 = longestNiceSubstring(s.substring(i+1))
            if (sub1.length >= sub2.length) {
                return sub1
            } else {
                return sub2
            }
        }
    }
    return s
}

