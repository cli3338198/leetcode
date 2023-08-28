class Heap {
    constructor(cmp) {
        this.h = []
        this.compare = this.buildCompare(cmp)
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c / 2) - 1
        while (p in this.h && this.compare(p, c)) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c / 2) - 1
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
        while ((l in this.h && this.compare(p, l)) || (r in this.h && this.compare(p, r))) {
            let t = p
            if (l in this.h && this.compare(p, l)) t = l
            if (r in this.h && this.compare(t, r)) t = r
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
    buildCompare(cmp) {
        return function(a, b) {
            return cmp(this.h[a], this.h[b])
        }
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const heap = new Heap((a, b) => a[0] > b[0])
    heap.push([grid[0][0], 0, 0])
    const visited = new Set()
    visited.add("0 0")
    while (heap.h.length) {
        const [curMax, r, c] = heap.pop()
        if (r === rows-1 && c === cols-1) {
            return curMax
        }
        for (const [rr, cc] of dirs) {
            const rrr = rr + r
            const ccc = cc + c
            if (rrr in grid && ccc in grid[rrr] && !visited.has(`${rrr} ${ccc}`)) {
                visited.add(`${rrr} ${ccc}`)
                heap.push([Math.max(curMax, grid[rrr][ccc]), rrr, ccc])
            }
        }
    }
    return min
};