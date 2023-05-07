/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let flag = false
    return +String(num).split("").map((n) => {
        if (n === "6") {
            if (!flag) {
                flag = !flag
                return "9"
            } else {
                return n
            }
        } else {
            return n
        }
    }).join("")
};