/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (const row of image) {
        for (let i=0; i < Math.floor(row.length/2); i++) {
            [row[i], row[row.length-1-i]] = [row[row.length-1-i], row[i]]
        }
        for (let i=0; i < row.length; i++) {
            if (row[i] === 1) {
                row[i] = 0
            } else {
                row[i] = 1
            }
        }
    }
    return image
};