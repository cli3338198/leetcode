class Heap<T> {
    public h: T[]
    private compare: (p: number, c: number) => boolean
    constructor(compare: (p: T, c: T) => boolean) {
        this.h = []
        this.compare = this.buildCompare(compare)
    }
    push(a: T) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c: number) {
        let p = Math.ceil(c/2) - 1
        while (p in this.h && this.compare(p, c)) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2) - 1
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
    heapify(p: number) {
        let l = 2 * p + 1
        let r = 2 * p + 2
        while ((l in this.h && this.compare(p, l)) || (r in this.h && this.compare(p, r))) {
            let t = p
            if (l in this.h && this.compare(t, l)) t = l
            if (r in this.h && this.compare(t, r)) t = r
            if (t !== p) {
                this.swap(p, t)
                p = t
                l = 2 * p + 1
                r = 2 * p + 2
            }
        }
    }
    swap(p: number, c: number) {
        [this.h[p], this.h[c]] = [this.h[c], this.h[p]]
    }
    buildCompare = (compare: (a: T, b: T) => boolean) => (p: number, c: number) => compare(this.h[p], this.h[c])
}

function lastStoneWeight(stones: number[]): number {
    const maxHeap = new Heap<number>((a: number, b: number) => a < b)
    stones.forEach(stone => maxHeap.push(stone))
    while (maxHeap.h.length > 1) {
        const stone1 = maxHeap.pop()
        const stone2 = maxHeap.pop()
        if (stone1 !== stone2) {
            const newStone = Math.max(stone1, stone2) - Math.min(stone1, stone2)
            maxHeap.push(newStone)
        }
        
    }
    if (maxHeap.h.length) {
        return maxHeap.h[0]
    } else {
        return 0
    }
};