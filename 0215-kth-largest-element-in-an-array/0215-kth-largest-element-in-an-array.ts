class Heap<T> {
    private h: T[]
    constructor(private compare: (a: T, b: T) => boolean) {
        this.compare = compare
        this.h = []
    }
    push(a: T): void {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c: number): void {
        let p = Math.ceil(c/2) - 1
        while (p in this.h && this.compare(this.h[p], this.h[c])) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2) - 1
        }
    }
    swap(a: number, b: number): void {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]]
    }
    pop(): T {
        if (this.h.length > 1) {
            const temp = this.h[0]
            this.h[0] = this.h.pop()
            this.heapify(0)
            return temp
        } else {
            return this.h.pop()
        }
    }
    heapify(p: number): void {
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
}

function findKthLargest(nums: number[], k: number): number {
    const heap = new Heap<number>((a: number, b: number) => a < b)
    for (const n of nums) {
        heap.push(n)
    }
    for (let i=0; i < k-1; i++) {
        heap.pop()
    }
    return heap.pop()
};