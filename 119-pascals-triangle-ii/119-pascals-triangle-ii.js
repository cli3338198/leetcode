/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const row = Array(rowIndex+1).fill(1)
    for (let i=2; i <= rowIndex; i++) {
        for (let j=i-1; j >= 1; j--) {
            row[j] += row[j-1]
        }
    }
    return row
};