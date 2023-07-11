/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return join(word1) === join(word2)
    
    function join(arr) {
        return arr.reduce((acc, val) => acc + val, "")
    }
};