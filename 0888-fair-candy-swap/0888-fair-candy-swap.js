/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceSum = aliceSizes.reduce((acc, val) => acc + val, 0)
    const bobSum = bobSizes.reduce((acc, val) => acc + val, 0)
    const bobCandies = new Set(bobSizes)
    for (const candy of aliceSizes) {
        if (bobCandies.has(candy + ((bobSum - aliceSum) / 2))) {
            return [candy, candy + ((bobSum - aliceSum) / 2)]
        }
    }
};