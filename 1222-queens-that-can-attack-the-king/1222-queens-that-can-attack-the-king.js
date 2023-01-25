/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    queens = new Set(queens.map(([c, r]) => `${r} ${c}`))
    const res = []
    for (const r of [-1, 0, 1]) {
        for (const c of [-1, 0, 1]) {
            for (let i=1; i < 8; i++) {
                let kc = king[0] + c * i
                let kr = king[1] + r * i
                if (queens.has(`${kr} ${kc}`)) {
                    res.push([kc, kr])
                    break
                }
            }
        }
    }
    return res
};