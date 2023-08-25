/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    const nums = []
    while (num) {
        nums.push(num % 10)
        num = Math.floor(num / 10)
    }
    nums.sort((a, b) => a - b)
    let num1 = 0, num2 = 0
    for (let i=0; i < nums.length; i++) {
        if (i % 2) {
            num1 = num1 * 10 + nums[i]
        } else {
            num2 = num2 * 10 + nums[i]
        }
    }
    return num1 + num2
};