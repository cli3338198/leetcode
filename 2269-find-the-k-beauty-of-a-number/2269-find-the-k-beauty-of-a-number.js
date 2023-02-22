/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    num = String(num)
    let res = 0
    let l = 0
    for (let r=k-1; r < num.length; r++) {
        if (isBeautiful(l, r)) res++
        l++
    }
    return res
    
    function isBeautiful(l, r) {
        return num % Number(num.slice(l, r+1)) === 0
    }
};