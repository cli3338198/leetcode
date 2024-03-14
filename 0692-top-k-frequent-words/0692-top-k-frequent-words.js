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
            c = p, p = Math.ceil(c / 2) - 1
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
                p = t, l = 2 * p + 1, r = 2 * p + 2
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
    clear() {
        this.h = []
    }
}

class Trie {
    constructor() {
        this.children = Array(26).fill(null)
        this.word = ""
        this.count = 0
        this.end = false
    }
    push(word) {
        let cur = this
        for (const c of word) {
            const idx = c.charCodeAt(0) - 96
            if (cur.children[idx] === null) {
                cur.children[idx] = new Trie()
                cur.children[idx].word = cur.word + c
            }
            cur = cur.children[idx]
            cur.children[idx].count++
        }
        cur.end = true
    }
    findKfrequent(k) {
        const compare = (t1, t2) => {
            if (t1.count < t2.count) {
                return true
            } else if (t1.count > t2.count) {
                return false
            } else {
                return t1.word > t2.word
            }
        }
        const maxHeap = new Heap(compare)
        this.traverse(this, maxHeap)
        const kFreq = []
        for (let i=0; i < k; i++) {
            const child = maxHeap.pop()
            if (!child) break
            kFreq.push(child.word)
        }
        return kFreq
    }
    traverse(child, maxHeap) {
        if (!child) return
        if (child.end) {
            maxHeap.push(child)
        }
        for (const grandchild of child.children) {
            if (grandchild) {
                this.traverse(grandchild, maxHeap)
            }
        }
    }
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {}
    for (const word of words) {
        map[word] = map[word] + 1 || 1
    }
    const compare = (a, b) => {
        if (map[a] < map[b]) {
            return true
        } else if (map[a] > map[b]) {
            return false
        } else {
            if (a < b) {
                return false
            } else {
                return true
            }
        }
    }
    const maxHeap = new Heap(compare)
    for (const word in map) {
        maxHeap.push(word)
    }
    const res = []
    while (k--) {
        res.push(maxHeap.pop())
    }
    return res
    
    //
    
    const freq = {}
    for (const word of words) {
        freq[word] = freq[word] + 1 || 1
    }
    return Array.from(new Set(words)).sort((a, b) => {
        if (freq[a] > freq[b]) {
            return -1
        } else if (freq[b] > freq[a]) {
            return 1
        } else if (freq[a] === freq[b]) {
            if (a < b) {
                return -1
            } else {
                return 1
            }
        }
    }).slice(0, k)
};