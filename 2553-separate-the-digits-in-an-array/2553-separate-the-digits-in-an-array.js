/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    return nums.reduce((acc, num) => [...acc, ...(String(num).split(""))], [])
};

separateDigits = function(nums) {
    return nums.join("").split("")
}
