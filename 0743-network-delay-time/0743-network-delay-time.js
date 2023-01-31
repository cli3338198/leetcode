/**
 * @param {number[][]} times
 * @param {number} n
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
                t = p
                l = 2 * p + 1
                r = 2 * p + 2
            }
        }
    }
    swap(a, b) {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]]
    }
}

var networkDelayTime = function(times, n, k) {
    const graph = {}
    for (const [u, v, t] of times) {
        graph[u] = graph[u] || []
        graph[u].push([v, t])
    }
    const heap = new Heap((a, b) => a[1] < b[1])
    heap.push([k, 0])
    const distances = {}
    while (heap.h.length) {
        const [u, curTime] = heap.pop()
        if (!(u in distances) || curTime < distances[u]) {
            distances[u] = curTime
            for (const [v, uToVTime] of graph[u] || []) {
                heap.push([v, curTime + uToVTime])
            }
        }
    }
    if (Object.values(distances).length !== n) return -1
    return Math.max(...Object.values(distances))
};