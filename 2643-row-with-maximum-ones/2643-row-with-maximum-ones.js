/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let idx = null, cnt = 0
    const map = {}
    for (const r in mat) {
        for (const c in mat[r]) {
            if (mat[r][c] === 1) {
                map[r] = map[r] + 1 || 1
                if (idx === null || map[r] > cnt) {
                    idx = r
                    cnt = map[r]
                }
            }
        }
    }
    return [idx, cnt]
};

rowAndMaximumOnes = function(mat) {
    return mat.reduce((acc, row, i) => {
        const [idx, cnt] = acc
        const sum = row.reduce((acc, val) => acc + val, 0)
        if (idx === null || sum > cnt) {
            return [i, sum]
        } else {
            return acc
        }
    }, [null, 0])
}