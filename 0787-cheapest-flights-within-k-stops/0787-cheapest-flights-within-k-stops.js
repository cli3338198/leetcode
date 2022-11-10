/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
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
        let p = Math.ceil(c/2) - 1
        while (p in this.h && this.compare(this.h[p], this.h[c])) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2) - 1
        }
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
    swap(a, b) {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]]
    }
}

var findCheapestPrice = function(n, flights, src, dst, k) {
    const graph = {}
    for (const [u, v, cost] of flights) {
        graph[u] = graph[u] || []
        graph[u].push([v, cost])
    }
    const pq = new Heap(([,a], [,b]) => b < a)
    const distances = {}
    pq.push([src, 0, k])
    while (pq.h.length) {
        const [cur, cost, stops] = pq.pop()
        if (cur === dst) return cost
        if (stops < 0 || distances[cur] >= stops) continue
        distances[cur] = stops
        for (const [next, cost2] of graph[cur] || []) {
            pq.push([next, cost+cost2, stops-1])
        }
    }
    return -1
};