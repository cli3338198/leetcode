/**
 * @param {number[][]} heightMap
 * @return {number}
 */
class Heap {
    constructor(compare) {
        this.compare = compare
        this.h = []
    }
    push(n) {
        this.h.push(n)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c/2)-1
        while (p in this.h && this.compare(this.h[p], this.h[c])) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2)-1
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

var trapRainWater = function(heightMap) {
    const rows = heightMap.length
    const cols = heightMap[0].length
    const visited = new Set()
    const pq = new Heap(([a,], [b,]) => b < a)
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (r === 0 || r === rows-1 || c === cols-1 || c === 0) {
                pq.push([heightMap[r][c], [r, c]])
                visited.add(`${r} ${c}`)
            }
        }
    }
    let res = 0
    let minHt = 0
    while (pq.h.length) {
        const [curHt, [r, c]] = pq.pop()
        minHt = Math.max(minHt, curHt)
        for (const [rr, cc] of [[1,0], [0,1], [-1,0], [0,-1]]) {
            const rrr = rr + r
            const ccc = cc + c
            if (rrr in heightMap && ccc in heightMap[rrr] && !visited.has(`${rrr} ${ccc}`)) {
                pq.push([heightMap[rrr][ccc], [rrr, ccc]])
                visited.add(`${rrr} ${ccc}`)
                if (heightMap[rrr][ccc] < minHt) {
                    res += minHt - heightMap[rrr][ccc]
                }
            }
        }
    }
    return res
};