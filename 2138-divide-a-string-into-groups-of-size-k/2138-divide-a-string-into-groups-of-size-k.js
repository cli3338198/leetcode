/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const res = []
    for (let i=0; i < s.length; i += k) {
        let cur = ""
        for (let j=i; j < i + k && j < s.length; j++) {
            cur += s[j]
        }
        if (cur.length < k) {
            cur += fill.repeat(k - cur.length)
        }
        res.push(cur)
    }
    return res
};