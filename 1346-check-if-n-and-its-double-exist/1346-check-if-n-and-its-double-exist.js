/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i=0; i < arr.length; i++) {
        const j = arr.indexOf(arr[i] * 2)
        if (j !== -1 && i !== j) return true
    }
    return false
};