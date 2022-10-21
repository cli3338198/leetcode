/**
 * @param {number[][]} heights
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.h = []
    }
    add(n) {
        this.h.push(n)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c / 2) - 1
        while (p >= 0 && this.h[c][0] < this.h[p][0]) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c / 2) - 1
        }
    }
    getMin() {
        if (this.h.length <= 1) {
            return this.h.pop()
        } else {
            const temp = this.h[0]
            this.h[0] = this.h.pop()
            this.heapify(0)
            return temp
        }
    }
    heapify(p) {
        let l = 2 * p + 1
        let r = 2 * p + 2
        while ((l in this.h && this.h[l][0] < this.h[p][0]) || 
               (r in this.h && this.h[r][0] < this.h[p][0])) {
            let t = p
            if ((l in this.h && this.h[l][0] < this.h[t][0])) t = l
            if ((r in this.h && this.h[r][0] < this.h[t][0])) t = r
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

var minimumEffortPath = function(heights) {
    const rows = heights.length
    const cols = heights[0].length
    const costs = {}
    const minHeap = new MinHeap()
    minHeap.add([0, 0, 0])
    while (minHeap.h.length) {
        const [cost, r, c] = minHeap.getMin()
        if (r === rows-1 && c === cols-1) {
            return cost
        }
        if (!([r, c] in costs) || cost < costs[[r, c]]) {
            costs[[r, c]] = cost
            for (const [rr, cc] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
                const rrr = r + rr
                const ccc = c + cc
                if (rrr >= 0 && rrr < rows && ccc >= 0 && ccc < cols) {
                    minHeap.add([Math.max(cost, Math.abs(heights[r][c]-heights[rrr][ccc])), rrr, ccc])
                }
            }
        }
    }
};