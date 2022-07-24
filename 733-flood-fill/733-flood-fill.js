/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, r, c, color) {
    const original = image[r][c]
    helper(r, c)
    return image
    
    function helper(r, c) {
        if (!(r in image) || !(c in image[r]) || image[r][c] !== original || image[r][c] === color) return
        image[r][c] = color
        helper(r+1, c)
        helper(r-1, c)
        helper(r, c+1)
        helper(r, c-1)
    }
};