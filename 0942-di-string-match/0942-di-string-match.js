/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let head = 0
    let tail = s.length
    const res = []
    for (const p of s) {
        if (p === "I") {
            res.push(head)
            head++
        } else if (p === "D") {
            res.push(tail)
            tail--
        }
    }
    res.push(head)
    return res
};