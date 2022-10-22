/**
 * @param {number[]} nums
 * @return {number[]}
 */
class Heap {
    constructor(compare) {
        this.h = []
        this.compare = compare
    }
    push(n) {
        this.h.push(n)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c) {
        let p = Math.ceil(c/2) - 1
        while (p >= 0 && this.compare(this.h[p], this.h[c])) {
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
        while ((l < this.h.length && this.compare(this.h[p], this.h[l]) || 
                (r < this.h.length && this.compare(this.h[p], this.h[r])))) {
            let t = p
            if (l < this.h.length && this.compare(this.h[t], this.h[l])) t = l
            if (r < this.h.length && this.compare(this.h[t], this.h[r])) t = r
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

var sortEvenOdd = function(nums) {
    const evens = new Heap((a, b) => a > b)
    const odds = new Heap((a, b) => a < b)
    for (let i=0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evens.push(nums[i])
        } else {
            odds.push(nums[i])
        }
    }
    const res = []
    while (evens.h.length || odds.h.length) {
        if (evens.h[0]) {
            res.push(evens.pop())
        } 
        if (odds.h[0]) {
            res.push(odds.pop())
        }
    }
    return res
};