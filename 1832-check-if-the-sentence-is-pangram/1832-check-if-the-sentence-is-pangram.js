/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const arr = Array(26).fill(false)
    for (const c of sentence) {
        arr[c.charCodeAt(0)-97] = true
    }
    return arr.every(c => c === true)
};