/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter(evenDigits).length
    
    function evenDigits(num) {
        let numDigits = 0
        while (num) {
            num = Math.floor(num/10)
            numDigits++
        }
        return numDigits % 2 === 0
    }
};