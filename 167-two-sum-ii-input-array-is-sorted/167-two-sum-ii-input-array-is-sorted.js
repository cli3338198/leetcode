/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i=0; i < numbers.length; i++) {
        const j = binarySearch(i+1, numbers.length-1, target - numbers[i])
        if (j) return [i+1, j+1]
    }
    
    function binarySearch(l, r, target) {
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            if (numbers[m] === target) {
                return m
            } else if (numbers[m] > target) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
    }
};