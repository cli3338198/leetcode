/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse()
    b = b.split("").reverse()
    let res = ""
    let carry = 0
    for (let i=0; i < Math.max(a.length, b.length); i++) {
        const digitA = i < a.length ? +a[i] : 0
        const digitB = i < b.length ? +b[i] : 0
        const sum = digitA + digitB + carry
        res = sum % 2 + res
        carry = Math.floor(sum / 2)
    }
    return (carry === 1 ? "1" : "") + res
};