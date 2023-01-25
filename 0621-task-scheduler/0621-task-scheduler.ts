class Heap {
    public compare: (a: number, b: number) => boolean
    public h: number[]
    
    constructor(compare: (a: number, b: number) => boolean) {
        this.compare = compare
        this.h = []
    }
    push(a: number): void {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    pop(): number | null {
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
}

function leastInterval(tasks: string[], n: number): number {
    const map: Record<string, number> = {}
    for (const task of tasks) {
        map[task] = map[task] + 1 || 1
    }
    const heap = new Heap((a: number, b: number) => a < b)
    for (const key in map) {
        heap.push(map[key])
    }
    const q: number[][] = []
    let time = 0
    while (heap.h.length || q.length) {
        time++
        if (heap.h.length) {
            const cnt = heap.pop() - 1
            if (cnt > 0) q.push([cnt, time + n])
        }
        if (q.length && q[0][1] <= time) {
            const [cnt, ] = q.shift()
            heap.push(cnt)
        }
    }
    return time
};
