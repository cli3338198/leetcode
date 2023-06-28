/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length-1
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        if (sum === target) {
            return [l+1, r+1]
        } else if (sum > target) {
            r--
        } else {
            l++
        }
    }
};

twoSum = function(numbers, target) {
    for (let i=0; i < numbers.length; i++) {
        const idx = binSearch(i+1, numbers.length-1, target-numbers[i])
        if (idx !== -1) return [i+1, idx+1]
    }
    
    function binSearch(l, r, target) {
        while (l < r) {
            const m = Math.floor((l+r)/2)
            if (numbers[m] === target) {
                return m
            } else if (numbers[m] > target) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
        if (numbers[l] === target) {
            return l
        } else {
            return -1
        }
    }
}