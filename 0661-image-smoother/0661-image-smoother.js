/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const rows = img.length
    const cols = img[0].length
    const map = {}
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            map[[r, c]] = helper(r, c)
        }
    }
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            img[r][c] = map[[r, c]]
        }
    }
    return img
    
    function helper(r, c) {
        let sum = img[r][c]
        let count = 1
        for (const [rr, cc] of [[1,0], [0,1], [-1,0], [0,-1], [-1,-1], [1,1], [-1,1], [1,-1]]) {
            const rrr = rr + r
            const ccc = cc + c
            if (rrr in img && ccc in img[rrr]) {
                sum += img[rrr][ccc]
                count++
            }
        }
        return Math.floor(sum/count)
    }
};