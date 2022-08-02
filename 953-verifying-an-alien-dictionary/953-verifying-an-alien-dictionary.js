/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    order = order.split("").reduce((acc, c, i) => ({...acc, [c]: i}), {})
    for (let i=0; i < words.length-1; i++) {
        const w1 = words[i]
        const w2 = words[i+1]
        for (let j=0; j < w1.length; j++) {
            if (j === w2.length) return false
            if (w1[j] !== w2[j]) {
                if (order[w1[j]] > order[w2[j]]) {
                    return false
                } else {
                    break
                }
            }
        }
    }
    return true

};