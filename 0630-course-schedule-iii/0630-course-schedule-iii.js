/**
 * @param {number[][]} courses
 * @return {number}
 */
class Heap {
    constructor(compare) {
        this.h = []
        this.compare = compare
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

var scheduleCourse = function(courses) {
    courses.sort(([,a], [,b]) => a - b)
    const pq = new Heap((a, b) => a < b)
    let curTime = 0
    for (const [duration, deadline] of courses) {
        if (curTime + duration <= deadline) {
            pq.push(duration)
            curTime += duration
        } else if (pq.h.length && pq.h[0] > duration) {
            curTime -= pq.pop()
            pq.push(duration)
            curTime += duration
        }
    }
    return pq.h.length
};