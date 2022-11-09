/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    this.prefixSums = Array(rows+1).fill(0).map(() => Array(cols+1).fill(0))
    for (let r=1; r <= rows; r++) {
        for (let c=1; c <= cols; c++) {
            this.prefixSums[r][c] = matrix[r-1][c-1] + this.prefixSums[r-1][c] + this.prefixSums[r][c-1] - this.prefixSums[r-1][c-1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.prefixSums[row2+1][col2+1] - this.prefixSums[row2+1][col1] - this.prefixSums[row1][col2+1] + this.prefixSums[row1][col1] 
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */