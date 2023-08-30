/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    let l = 0, r = target
    while (l < r) {
        const m = Math.floor((l+r)/2)
        if (diff(m) <= diff(m+1)) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
    
    function diff(num) {
        let sum = 0
        for (const n of arr) {
            sum += Math.min(n, num)
        }
        return Math.abs(sum - target)
    }
};