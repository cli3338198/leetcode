/**
 * @param {number[][]} events
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

var maxEvents = function(events) {
    const n = events.length
    events.sort(([a], [b]) => a - b)
    let i = 0
    let curDay = 0
    let res = 0
    const pq = new Heap((a, b) => a > b)
    while (i < n || pq.h.length > 0) {
        if (pq.h.length === 0) {
            curDay = events[i][0]
        }
        while (i < n && events[i][0] <= curDay) {
            pq.push(events[i][1])
            i++
        }
        pq.pop()
        res++
        curDay++
        while (pq.h.length > 0 && pq.h[0] < curDay) {
            pq.pop()
        }
    }
    return res
};