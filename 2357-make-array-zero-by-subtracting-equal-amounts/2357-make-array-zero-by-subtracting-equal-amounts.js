/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res = 0
    while (true) {
        let min = Infinity
        for (const num of nums) {
            if (num > 0) min = Math.min(min, num)
        }
        if (min === Infinity) break
        for (let i=0; i < nums.length; i++) {
            if (nums[i] - min >= 0) nums[i] -= min
        }
        res++
    }
    return res
};

minimumOperations = function(nums) {
    class Heap {
        constructor(compare) {
            this.h = []
            this.compare = compare
        }
        insert(a) {
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
        swap(i, j) {
            [this.h[i], this.h[j]] = [this.h[j], this.h[i]]
        }
        subtractMin() {
            const min = this.h[0]
            this.h = this.h.map(n => n - min)
        }
    }
    const heap = new Heap((a, b) => a > b)
    for (const n of nums) {
        heap.insert(n)
    }
    let res = 0
    while (heap.h.length) {
        if (heap.h[0] === 0) {
            heap.pop()
        } else {
            heap.subtractMin()
            res++
        }
    }
    return res
}

minimumOperations = function(nums) {
    return Array.from(new Set(nums.filter(n => n > 0))).length
}