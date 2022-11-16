/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
class Heap {
    constructor(compare) {
        this.compare = compare
        this.h = []
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c / 2) - 1
        while (p in this.h && this.compare(this.h[p], this.h[c])) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c / 2) - 1
        }
    }
    swap(a, b) {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]]
    }
    pop() {
        if (this.h.length > 1) {
            const temp = this.h[0]
            this.h[0] = this.h.pop()
            this.heapify(0)
            return temp
        } else {
            return this.h.pop()
        }
    }
    heapify(p) {
        let l = 2 * p + 1
        let r = 2 * p + 2
        while ((l in this.h && this.compare(this.h[p], this.h[l])) || (r in this.h && this.compare(this.h[p], this.h[r]))) {
            let t = p
            if (l in this.h && this.compare(this.h[t], this.h[l])) t = l
            if (r in this.h && this.compare(this.h[t], this.h[r])) t = r
            if (t !== p) {
                this.swap(t, p)
                p = t
                l = 2 * p + 1
                r = 2 * p + 2
            }
        }
    }
}

var nthSuperUglyNumber = function(n, primes) {
    const pq = new Heap(([a], [b]) => a > b)
    const dp = [1]
    for (const prime of primes) {
        pq.push([prime, 0, prime])
    }
    while (n - 1) {
        const [num,,] = pq.h[0]
        dp.push(num)
        while (num === pq.h[0][0]) {
            let [prime, idx, base] = pq.pop()
            prime = dp[idx] * base
            idx++
            pq.push([prime, idx, base])
        }
        n--
    }
    return dp[dp.length-1]
};