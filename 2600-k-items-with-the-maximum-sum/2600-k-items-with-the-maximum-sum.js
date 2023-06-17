/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let sum = 0
    for (let i=0; i < numOnes && k; i++) {
        sum += 1
        k--
    }
    for (let i=0; i < numZeros && k; i++) {
        sum += 0
        k--
    }
    for (let i=0; i < numNegOnes && k; i++) {
        sum += -1
        k--
    }
    return sum
};