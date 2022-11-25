/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const n = img1.length
    const arr1 = []
    const arr2 = []
    for (let r=0; r < n; r++) {
        for (let c=0; c < n; c++) {
            if (img1[r][c] === 1) {
                arr1.push([r, c])
            }
            if (img2[r][c] === 1) {
                arr2.push([r, c])
            }
        }
    }
    let res = 0
    const map = {}
    for (const [r1, c1] of arr1) {
        for (const [r2, c2] of arr2) {
            const a = r1 - r2
            const b = c1 - c2
            map[[a, b]] = map[[a, b]] + 1 || 1
            res = Math.max(res, map[[a, b]])
        }
    }
    return res
};