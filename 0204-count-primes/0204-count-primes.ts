function countPrimes(n: number): number {
    const primes = Array(n).fill(true)
    primes[0] = false
    primes[1] = false
    for (let i=2; i < Math.sqrt(n); i++) {
        if (primes[i] === true) {
            for (let j=i*i; j < n; j += i) {
                primes[j] = false
            }
        }
    }
    return primes.reduce((acc, x) => acc + (x ? 1 : 0), 0)
};