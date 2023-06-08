/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set()
    let res = ""
    for (const c of s) {
        set.add(c)
        const upper = c.toUpperCase()
        const lower = c.toLowerCase()
        if (set.has(upper) && set.has(lower)) {
            if (res === "" || res < upper) {
                res = upper
            } 
        }
    }
    return res
};