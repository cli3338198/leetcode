/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = Object.entries({
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"        
    }).sort(([a], [b]) => b - a)
    
    let res = ''
    for (let [curNum, roman] of map) {
        while (num >= curNum) {
            res += roman
            num -= curNum
        }
    }
    return res
};