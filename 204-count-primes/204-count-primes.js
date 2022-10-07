/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primes = Array(n).fill(true)
    let count = 0
    for (let i=2; i < n; i++) {
        if (primes[i]) {
            count++
            for (let j=i; j < n; j += i) {
                primes[j] = false
            }
        }
    }
    return count
};