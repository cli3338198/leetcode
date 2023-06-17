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

var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    return [...Array(numOnes).fill(1), ...Array(numZeros).fill(0), ...Array(numNegOnes).fill(-1)].reduce((acc, val, i) => acc + (i < k ? val : 0), 0)
}

kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    return Math.min(k, numOnes) - Math.max(0, k - numZeros - numOnes)
}