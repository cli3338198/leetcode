/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let open = 0
    let count = 0
    for (const bracket of s) {
        if (bracket === "[") {
            open++
        } else {
            if (open > 0) {
                open--
            } else {
                count++
                open++
            }
        }
    }
    return count
};