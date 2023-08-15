/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const map = {}
    "RLDU".split("").forEach(c => map[c] = 0)
    for (const move of moves) {
        map[move]++
    }
    return map["R"] === map["L"] && map["U"] === map["D"]
};