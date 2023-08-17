/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const cnt = {}
    let res = 0, i = 0, j = 0
    while (j < s.length) {
        while (!(s[j] in cnt) || (cnt[s[j]] === 0)) {
            cnt[s[j]] = cnt[s[j]] + 1 || 1
            j++
        }
        res++
        while (i < j) {
            cnt[s[i]]--
            i++
        }
    }
    return res
};

partitionString = function(s) {
    const set = new Set()
    let res = 0
    for (const c of s) {
        if (set.has(c)) {
            set.clear()
            res++
        }
        set.add(c)
    }
    return res + 1
}