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

class Heap2<T> {
    public heap: T[]
    private compare: (parent: number, child: number) => boolean
    constructor(compare: (a: T, b: T) => boolean) {
        this.heap = []
        this.compare = this.buildCompare(compare)
    }
    push(a: T) {
        this.heap.push(a)
        this.bubbleUp(this.heap.length-1)
    }
    bubbleUp(child: number) {
        let parent = Math.ceil(child / 2) - 1
        while (parent in this.heap && this.compare(parent, child)) {
            this.swap(parent, child)
            child = parent
            parent = Math.ceil(child / 2) - 1
        }
    }
    pop() {
        if (this.heap.length > 1) {
            const top = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapify(0)
            return top
        } else {
            return this.heap.pop()
        }
    }
    heapify(parent: number) {
        let leftChild = 2 * parent + 1
        let rightChild = 2 * parent + 2
        while ((leftChild in this.heap && this.compare(parent, leftChild)) || (rightChild in this.heap && this.compare(parent, rightChild))) {
            let temp = parent
            if (leftChild in this.heap && this.compare(temp, leftChild)) temp = leftChild
            if (rightChild in this.heap && this.compare(temp, rightChild)) temp = rightChild
            if (temp !== parent) {
                this.swap(parent, temp)
                parent = temp
                leftChild = 2 * parent + 1
                rightChild = 2 * parent + 2
            }
        }
    }
    swap(parent: number, child: number) {
        [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]
    }
    buildCompare = (compare: (a: T, b: T) => boolean) => (parent: number, child: number) => compare(this.heap[parent], this.heap[child]) 
}

function lastStoneWeight(stones: number[]): number {
    const maxHeap2 = new Heap2<number>((a: number, b: number) => a < b)
    stones.forEach(stone => maxHeap2.push(stone))
    while (maxHeap2.heap.length > 1) {
        const stone1 = maxHeap2.pop()
        const stone2 = maxHeap2.pop()
        if (stone1 !== stone2) {
            maxHeap2.push(Math.abs(stone1 - stone2))
        }
    }
    return maxHeap2.heap.length ? maxHeap2.heap[0] : 0
    
    //
    
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