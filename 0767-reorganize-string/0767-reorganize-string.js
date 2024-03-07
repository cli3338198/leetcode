class Heap {
    constructor(compare) {
        this.h = []
        this.compare = this.compare(compare)
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
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
        function fn(p, c) {
            return compare(this.h[p], this.h[c])
        }
        return fn
    }
}

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let res = ""
    const hp = new Heap(({cnt: a}, {cnt: b}) => a < b)
    const map = {}
    const memo = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    for (const c in map) {
        hp.push({c, cnt: map[c]})
    }
    while (hp.h.length) {
        const candidates = []
        while (hp.h.length) {
            const char = hp.pop()
            let found = false
            if (char.c !== res.at(-1)) {
                found = true
                res += char.c
                char.cnt--
            }
            candidates.push(char)
            if (found) break
        }
        let hasRepeat = false
        for (const cand of candidates) {
            if (memo[[res, JSON.stringify(cand)]] === true) {
                hasRepeat = true
                break
            }
            memo[[res, JSON.stringify(cand)]] = true
            if (cand.cnt > 0) {
                hp.push(cand)
            }
        }
        if (hasRepeat) break
    }
    if (res.length !== s.length) {
        return ""
    }
    return res
};