/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return findProduct(n) - findSum(n)
    
    function findProduct(n) {
        let res = 1
        while (n) {
            res *= n % 10 ?? 1
            n = Math.floor(n / 10)
        }
        return res
    }
    
    function findSum(n) {
        let res = 0
        while (n) {
            res += n % 10
            n = Math.floor(n / 10)
        }
        console.log(res)
        return res
    }
};