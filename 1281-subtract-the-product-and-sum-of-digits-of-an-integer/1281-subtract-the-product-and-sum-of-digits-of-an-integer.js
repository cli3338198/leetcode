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

subtractProductAndSum = function(n) {
    return getDiff(getDigits(n).reduce(reducer, [1, 0]))
    
    function getDiff([a, b]) {
        return a - b
    }
    
    function getDigits(n) {
        const res = []
        while (n) {
            res.push(n % 10)
            n = Math.floor(n / 10)
        }
        return res
    }
    
    function reducer(acc, val) {
        let [product, sum] = acc
        product *= val ?? 1
        sum += val
        return [product, sum]
    }
}