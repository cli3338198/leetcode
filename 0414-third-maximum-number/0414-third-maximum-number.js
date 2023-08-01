/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMax = -Infinity
    let secondMax = -Infinity
    let thirdMax = -Infinity
    for (const n of nums) {
        if (n > firstMax) {
            thirdMax = secondMax
            secondMax = firstMax
            firstMax = n
        } else if (n > secondMax && n !== firstMax) {
            thirdMax = secondMax
            secondMax = n
        } else if (n > thirdMax && n !== secondMax && n !== firstMax) {
            thirdMax = n
        }
    }
    if (thirdMax === -Infinity) {
        return firstMax
    } else {
        return thirdMax
    }
};