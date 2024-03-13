class Heap {
    constructor(compare) {
        this.h = []
        this.compare = this.compare(compare)
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length - 1)
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
            const top = this.h[0]
            this.h[0] = this.h.pop()
            this.heapify(0)
            return top
        } else {
            return this.h.pop()
        }
    }
    heapify(p) {
        let l = 2 * p + 1, r = 2 * p + 2
        while ((l in this.h && this.compare(p, l)) || (r in this.h && this.compare(p, r))) {
            let t = p
            if (l in this.h && this.compare(t, l)) t = l
            if (r in this.h && this.compare(t, r)) t = r
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
    compare(compare) {
        function fn(a, b) {
            return compare(this.h[a], this.h[b])
        }
        return fn
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const h = new Heap((a, b) => a < b)
    for (const n of nums) {
        h.push(n)
    }
    while (k - 1) {
        h.pop()
        k--
    }
    return h.pop()
    
    // 
    
    return nums.sort((a, b) => b - a)[k - 1]
};