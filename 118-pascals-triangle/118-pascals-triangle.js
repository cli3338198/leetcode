/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = []
    for (let i=1; i <= numRows; i++) {
        const row = []
        const lastRow = res[res.length-1]
        for (let j=0; j < i; j++) {
            if (lastRow) {
                if (j === 0 || j === i-1) {
                    row.push(1)
                } else {
                    row.push(lastRow[j-1] + lastRow[j])
                }
            } else {
                row.push(j + 1)
            }
        }
        res.push(row)
    }
    return res
};