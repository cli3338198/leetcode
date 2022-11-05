/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
class Heap {
    constructor(compare) {
        this.h = []
        this.compare = compare
    }
    push(n) {
        this.h.push(n)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c/2) - 1
        while (p in this.h && this.compare(this.h[p], this.h[c])) {
            this.swap(c, p)
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
        while ((l in this.h && this.compare(this.h[p], this.h[l])) || 
                (r in this.h && this.compare(this.h[p], this.h[r]))) {
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

var maxProbability = function(n, edges, succProb, start, end) {
    const graph = {}
    const cost = {}
    for (let i=0; i < edges.length; i++) {
        const [u, v] = edges[i]
        graph[u] = graph[u] || []
        graph[v] = graph[v] || []
        graph[u].push(v)
        graph[v].push(u)
        cost[[u, v]] = succProb[i]
        cost[[v, u]] = succProb[i]
    }
    const q = new Heap((a, b) => a[1] < b[1])
    q.push([start, 1])
    const seen = new Set()
    while (q.h.length) {
        const [n, c] = q.pop()
        if (n === end) {
            return c
        }
        if (!seen.has(n)) {
            seen.add(n)
            for (const next of graph[n] || []) {
                q.push([next, c * cost[[n, next]]])
            }
        }
    }
    return 0
};