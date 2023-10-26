/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    const count = {}
    for (const move of moves) {
        count[move] = count[move] + 1 || 1
    }
    return Math.abs((count["L"] || 0) - (count["R"] || 0)) + (count["_"] || 0)
};