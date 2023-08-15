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

judgeCircle = function(moves) {
    let ud = 0
    let lr = 0
    for (const move of moves) {
        if (move === "L") lr--
        if (move === "R") lr++
        if (move === "D") ud++
        if (move === "U") ud--
    }
    return ud === 0 && lr === 0
}