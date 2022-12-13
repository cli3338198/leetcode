/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23])
    let res = 0
    for (let i=left; i <= right; i++) {
        if (primes.has(countBits(i))) {
            res++
        }
    }
    return res
};

function makePrimes(n) {
    const primes = Array(n+1).fill(true)
    primes[0] = false
    primes[1] = false
    for (let i=2; i <= n; i++) {
        if (primes[i] === true) {
            for (let j=i+i; j <= n; j++) {
                primes[j] = false
            }
        }
    }
    return primes
}

function countBits(n) {
    let res = 0
    while (n) {
        res += n & 1
        n >>= 1
    }
    return res
}