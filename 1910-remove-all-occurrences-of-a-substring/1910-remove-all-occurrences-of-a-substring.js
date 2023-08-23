/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let res = ""
    for (const c of s) {
        res += c
        if (res.length >= part.length) {
            const idx = res.indexOf(part)
            if (idx !== -1) {
                res = res.substring(0, idx) + res.substring(idx + part.length)
            }
        }
    }
    return res
};

removeOccurrences = function(s, part) {
    while (s.includes(part)) {
        s = s.replace(part, "")
    }
    return s
}