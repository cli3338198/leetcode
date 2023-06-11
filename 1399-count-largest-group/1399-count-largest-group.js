/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const map = {}
    let max = 0
    let res = 0
    for (let i=1; i <= n; i++) {
        const sum = getSum(i)
        map[sum] = map[sum] + 1 || 1
    }
    for (const k in map) {
        if (map[k] === max) res++
        if (map[k] > max) {
            max = map[k]
            res = 1
        }
    }
    return res
    
    function getSum(n) {
        const m = n
        let res = 0
        while (n) {
            res += n % 10
            n = Math.floor(n / 10)
        }
        return res
    }
};