/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (nums.every(num => num === 0)) return '0'
    return nums.sort(sorter).reduce((acc, val) => acc + val, "")
    
    function sorter(num1, num2) {
        if (Number(String(num1) + String(num2)) > Number(String(num2) + String(num1))) {
            return -1
        } else {
            return 1
        }
    }
};