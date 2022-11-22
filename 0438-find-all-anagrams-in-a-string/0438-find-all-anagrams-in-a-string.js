/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pLen = p.length
    const pMap = {}
    for (const c of p) {
        pMap[c] = pMap[c] + 1 || 1
    }
    const sMap = {}
    let l = 0
    let curLen = 0
    const res = []
    for (let r=0; r < s.length; r++) {
        const c = s[r]
        sMap[c] = sMap[c] + 1 || 1
        curLen++
        if (curLen === pLen) {
            if (Object.entries(sMap).every(([key, val]) => pMap[key] === val)) {
                res.push(l)
            }
            const c = s[l]
            sMap[c]--
            l++
            curLen--
            if (sMap[c] === 0) delete sMap[c]
        }
    }
    return res
};