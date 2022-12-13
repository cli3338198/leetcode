/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    const m1 = {}
    const m2 = {}
    for (const c of 'abcdefghijklmnopqrstuvwxyz') {
        m1[c] = 0
        m2[c] = 0
    }
    for (let i=0; i < s1.length; i++) {
        m1[s1[i]]++
        m2[s2[i]]++
    }
    let matches = 0
    for (const c in m1) {
        if (m1[c] === m2[c]) matches++
    }
    let l = 0
    let r = s1.length
    while (r < s2.length) {
        if (matches === 26) return true
        const cR = s2[r]
        m2[cR]++
        if (m1[cR] === m2[cR]) {
            matches++
        } else if (m1[cR] + 1 === m2[cR]) {
            matches--
        }
        r++
        const cL = s2[l]
        m2[cL]--
        if (m1[cL] === m2[cL]) {
            matches++
        } else if (m1[cL] - 1 === m2[cL]) {
            matches--
        }
        l++
    }
    return matches === 26
};