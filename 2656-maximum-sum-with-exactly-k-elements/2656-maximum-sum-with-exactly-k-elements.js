class Heap {
    constructor(cmp) {
        this.h = []
        this.compare = this.compare(cmp)
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c/2) - 1
        while (p in this.h && this.compare(p, c)) {
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
        while ((l in this.h && this.compare(p, l)) || (r in this.h && this.compare(p, r))) {
            let t = p
            if (l in this.h && this.compare(t, l)) t = l
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
    compare(cmp) {
        return function(a, b) {
            return cmp(this.h[a], this.h[b])
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const heap = new Heap((a, b) => a < b)
    for (const n of nums) {
        heap.push(n)
    }
    let res = 0
    for (let i=0; i < k; i++) {
        const temp = heap.pop()
        res += temp
        heap.push(temp + 1)
    }
    return res
};

maximizeSum = function(nums, k) {
    const max = Math.max(...nums)
    let res = 0
    for (let i=1; i <= k; i++) {
        res += max + i - 1
    }
    return res
}