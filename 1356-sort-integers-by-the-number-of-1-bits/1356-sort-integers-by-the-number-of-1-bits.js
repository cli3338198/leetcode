/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b)
    
    function bitCount(a) {
        let res = 0
        while (a) {
            a = a & (a - 1)
            res++
        }
        return res
    }
};