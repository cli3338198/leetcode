/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0
    let close = 0
    for (const paren of s) {
        if (paren === "(") {
            open++
        } else {
            if (open > 0) {
                open--
            } else {
                close++
            }
        }
    }
    return open + close
};