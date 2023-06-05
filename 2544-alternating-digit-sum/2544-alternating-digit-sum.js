/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return split(n).reduce((acc, val) => acc + val, 0)
    
    function split(n) {
        const res = []
        while (n) {
            res.push(n % 10)
            n = Math.floor(n / 10)
        }
        let sign = 1
        for (let i=res.length-1; i >= 0; i--) {
            res[i] *= sign
            sign *= -1
        }
        return res
    }
};

alternateDigitSum = function(n) {
    const arr = []
    while (n) {
        arr.push(n % 10)
        n = Math.floor(n / 10)
    }
    let sign = 1, res = 0
    for (let i=arr.length-1; i >= 0; i--) {
        res += sign * arr[i]
        sign *= -1
    }
    return res
}