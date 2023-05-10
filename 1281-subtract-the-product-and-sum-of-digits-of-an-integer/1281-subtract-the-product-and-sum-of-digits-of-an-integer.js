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
        return res
    }
};

subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    while (n) {
        product *= n % 10 ?? 1
        sum += n % 10
        n = Math.floor(n / 10)
    }
    return product - sum
}