/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const set = new Set()
    const res = new Set()
    for (let i=0, j=10; j <= s.length; i++, j++) {
        const sequence = s.substring(i, j)
        if (set.has(sequence)) {
            res.add(sequence)
        }
        set.add(sequence)
    }
    return Array.from(res)
};