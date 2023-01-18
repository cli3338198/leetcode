/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const res = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            res.push([r, c])
        }
    }
    return res.sort(mySort)
    
    function mySort([a, b], [c, d]) {
        return (Math.abs(a - rCenter) + Math.abs(b - cCenter)) < (Math.abs(c - rCenter) + Math.abs(d - cCenter)) ? -1 : 1
    }
};

allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const q = [[rCenter, cCenter]]
    const res = [[rCenter, cCenter]]
    const set = new Set()
    set.add(`${rCenter} ${cCenter}`)
    while (q.length) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const [r, c] = q.shift()
            for (const [rr, cc] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
                const rrr = rr + r
                const ccc = cc + c
                const key = `${rrr} ${ccc}`
                if (rrr >= 0 && rrr < rows && ccc >= 0 && ccc < cols && !set.has(key)) {
                    set.add(key)
                    res.push([rrr, ccc])
                    q.push([rrr, ccc])
                }
            }
        }
    }
    return res
}