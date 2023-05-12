/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = 0
    for (let i=0; i < arr.length; i++) {
        let curSum = 0
        for (let j=i; j < arr.length; j++) {
            curSum += arr[j]
            if ((j - i + 1) % 2 !== 0) res += curSum
        }
    }
    return res
};