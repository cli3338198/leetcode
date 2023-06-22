/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => b - a)
    let res = 0
    while (piles.length) {
        piles.shift()
        res += piles.shift()
        piles.pop()
    }
    return res
};

maxCoins = function(piles) {
    piles.sort((a, b) => b - a)
    let res = 0
    for (let i=1; i < piles.length * 2 / 3; i += 2) {
        res += piles[i]
    }
    return res
}