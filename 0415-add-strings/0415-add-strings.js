/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num1.length > num2.length) {
        return addStrings(num2, num1)
    }
    num1 = num1.split("").reverse()
    num2 = num2.split("").reverse()
    while (num1.length < num2.length) {
        num1.push('0')
    }
    const res = []
    let carry = 0
    for (let i=0; i < num1.length; i++) {
        const sum = Number(num1[i]) + Number(num2[i]) + carry
        const digit = sum % 10
        carry = Math.floor(sum / 10)
        res.push(digit)
    }
    if (carry > 0) {
        res.push(carry)
    }
    return res.reverse().join("")
};