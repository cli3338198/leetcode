class Heap {
    constructor(cmp) {
        this.h = []
        this.cmp = this.buildCompare(cmp)
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c/2) - 1
        while (p in this.h && this.cmp(p, c)) {
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
        let l = 2 * p + 1, r = 2 * p + 2
        while ((l in this.h && this.cmp(p, l)) || (r in this.h && this.cmp(p, r))) {
            let t = p
            if (l in this.h && this.cmp(t, l)) t = l
            if (r in this.h && this.cmp(t, r)) t = r
            if (t !== p) {
                this.swap(t, p)
                p = t
                l = 2 * p + 1, r = 2 * p + 2
            }
        }
    }
    swap(a, b) {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]]
    }
    buildCompare(cmp) {
        return function (a, b) {
            return cmp(this.h[a], this.h[b])
        }
    }
}
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const heap = new Heap((a, b) => a.count < b.count)
    const map = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    for (const c in map) {
        heap.push({c, count: map[c]})
    }
    let res = ""
    while (heap.h.length) {
        const {c, count} = heap.pop()
        res += c.repeat(count)
    }
    return res
};

frequencySort = function(s) {
    const map = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    const buckets = Array(s.length+1).fill(0).map(() => ([]))
    for (const c in map) {
        buckets[map[c]].push(c)
    }
    return buckets.reduceRight((acc, bucket, index) => acc + (bucket.length ? (bucket.sort().reduce((acc, char) => acc + (char.repeat(index)), "")) : ""), "")
}