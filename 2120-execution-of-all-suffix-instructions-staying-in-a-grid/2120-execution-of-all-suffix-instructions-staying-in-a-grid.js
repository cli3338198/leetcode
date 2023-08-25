/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const map = {"R": [0, 1], "L": [0, -1], "U": [-1, 0], "D": [1, 0]}
    const res = []
    for (let i=0; i < s.length; i++) {
        let [curR, curC] = startPos, moves = 0
        for (let j=i; j < s.length; j++) {
            const [r, c] = map[s[j]]
            curR += r
            curC += c
            if (curR < 0 || curR >= n || curC < 0 || curC >= n) break
            moves++
        }
        res.push(moves)
    }
    return res
};