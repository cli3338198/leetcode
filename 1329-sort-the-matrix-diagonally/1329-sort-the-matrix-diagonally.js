/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
class Heap {
    constructor(fn) {
        this.h = []
        this.fn = fn
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c/2)-1
        while (p in this.h && this.fn(this.h[p], this.h[c])) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2)-1
        }
    }
    pop() {
        if (this.h.length > 1) {
            const t = this.h[0]
            this.h[0] = this.h.pop()
            this.heapify(0)
            return t
        } else {
            return this.h.pop()
        }
    }
    heapify(p) {
        let l = 2 * p + 1
        let r = 2 * p + 2
        while ((l in this.h && this.fn(this.h[p], this.h[l])) || (r in this.h && this.fn(this.h[p], this.h[r]))) {
            let t = p
            if (l in this.h && this.fn(this.h[t], this.h[l])) t = l
            if (r in this.h && this.fn(this.h[t], this.h[r])) t = r
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

var diagonalSort = function(mat) {
    const map = {}
    for (const r in mat) {
        for (const c in mat[r]) {
            const diag = r - c
            map[diag] = map[diag] || new Heap((a, b) => a > b)
            map[diag].push(mat[r][c])
        }
    }
    for (const r in mat) {
        for (const c in mat[r]) {
            const diag = r - c
            mat[r][c] = map[diag].pop()
        }
    }
    return mat
};