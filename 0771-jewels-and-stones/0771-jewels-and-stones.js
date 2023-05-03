/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return stones.split("").reduce((acc, stone) => acc + (jewels.includes(stone) ? 1 : 0), 0)
};