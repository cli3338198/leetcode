/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Heap<T> {
    public h: T[]
    private cmp: (p: number, c: number) => boolean
    constructor(compare: (a: T, b: T) => boolean) {
        this.h = []
        this.cmp = this.buildCompare(compare)
    }
    push(a: T) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
    }
    bubbleUp(c: number) {
        let p = Math.ceil(c/2) + 1
        while (p in this.h && this.cmp(p, c)) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2) + 1
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
    heapify(p: number) {
        let l = 2 * p + 1
        let r = 2 * p + 2
        while ((l in this.h && this.cmp(p, l)) || (r in this.h && this.cmp(p, r))) {
            let t = p
            if (l in this.h && this.cmp(p, l)) t = l
            if (r in this.h && this.cmp(p, r)) t = r
            if (t !== p) {
                this.swap(t, p)
                p = t
                l = 2 * p + 1
                r = 2 * p + 2
            }
        }
    }
    swap(p: number, c: number) {
        [this.h[p], this.h[c]] = [this.h[c], this.h[p]]
    }
    buildCompare(compare: (a: T, b: T) => boolean) {
        return (p: number, c: number) => compare(this.h[p], this.h[c])
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = new Heap<ListNode>((a: ListNode, b: ListNode) => a.val > b.val)
    for (const list of lists) {
        if (list) heap.push(list)
    }
    while (heap.h.length > 1) {
        heap.push(merge(heap.pop(), heap.pop()))
    }
    return heap.h.length ? heap.pop() : null
    
    // 
    
    if (lists.length === 0) {
        return null
    }
    if (lists.length === 1) {
        return lists[0]
    }
    return merge(mergeKLists(lists.slice(0, Math.floor(lists.length/2))), mergeKLists(lists.slice(Math.floor(lists.length/2))))
};

function merge(a?: ListNode, b?: ListNode): ListNode | null {
    const dummy = new ListNode()
    let head = dummy
    while (a && b) {
        if (a.val < b.val) {
            head.next = a
            a = a.next
        } else {
            head.next = b
            b = b.next
        }
        head = head.next
    }
    if (a) head.next = a
    if (b) head.next = b
    return dummy.next
}