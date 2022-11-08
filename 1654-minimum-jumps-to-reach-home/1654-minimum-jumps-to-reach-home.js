/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
    const seen = new Set()
    forbidden = new Set(forbidden)
    const q = [[0, false]]
    seen.add([0, false])
    let res = 0
    while (q.length) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const [pos, flag] = q.shift()
            if (pos === x) return res
            const nextPos = pos + a
            if (nextPos < 6000 && !forbidden.has(nextPos) && !seen.has(`${nextPos}, ${false}`)) {
                seen.add(`${nextPos}, ${false}`)
                q.push([nextPos, false])
            }
            if (flag === false) {
                const nextPos = pos - b
                if (nextPos >= 0 && !forbidden.has(nextPos) && !seen.has(`${nextPos}, ${true}`)) {
                    seen.add(`${nextPos}, ${true}`)
                    q.push([nextPos, true])
                }
            }
        }
        res++
    }
    return -1
};