/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res = ""
    for (const c of s) {
        if (c === "i") {
            let reversed = ""
            for (const c of res) {
                reversed = c + reversed
            }
            res = reversed
        } else {
            res += c
        }
    }
    return res
};