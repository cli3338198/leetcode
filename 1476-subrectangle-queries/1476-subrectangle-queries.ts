class SubrectangleQueries {
    private rectangle: number[][];
    constructor(rectangle: number[][]) {
        this.rectangle = rectangle;
    }

    updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
        for (let r=row1; r <= row2; r++) {
            for (let c=col1; c <= col2; c++) {
                this.rectangle[r][c] = newValue;
            }
        }
    }

    getValue(row: number, col: number): number {
        return this.rectangle[row][col];
    }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */