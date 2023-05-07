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

maximum69Number = function(num) {
    let max = num
    num = String(num)
    for (let i=0; i < num.length; i++) {
        let cur = num.split("")
        cur[i] = 9
        cur = cur.join("")
        max = Math.max(max, +cur)
    }
    return max
}