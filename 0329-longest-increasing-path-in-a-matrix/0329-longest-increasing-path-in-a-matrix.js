/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(0))
    let res = 1
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            dp[r][c] = Math.max(dp[r][c], dfs(r, c))
            res = Math.max(res, dp[r][c])
        }
    }
    return res
    
    function dfs(r, c) {
        if (dp[r][c] !== 0) return dp[r][c]
        dp[r][c] = 1
        for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const rrr = rr + r
            const ccc = cc + c
            if (rrr in mat && ccc in mat[rrr] && mat[rrr][ccc] > mat[r][c]) {
                dp[r][c] = Math.max(dp[r][c], 1 + dfs(rrr, ccc))
            }
        }
        return dp[r][c]
    }
};

var longestIncreasingPath = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const outdegree = {}
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            outdegree[[r, c]] = 0
            for (const [rr, cc] of dirs) {
                const rrr = rr + r
                const ccc = cc + c
                if (rrr in mat && ccc in mat[rrr] && mat[rrr][ccc] > mat[r][c]) {
                    outdegree[[r, c]]++
                }
            }
        }
    }
    const q = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (outdegree[[r, c]] === 0) {
                q.push([r, c])
            }
        }
    }
    let res = 0
    while (q.length) {
        res++
        const len = q.length
        for (let i=0; i < len; i++) {
            const [r, c] = q.shift()
            if (outdegree[[r, c]] === 0) {
                for (const [rr, cc] of dirs) {
                    const rrr = rr + r
                    const ccc = cc + c
                    if (rrr in mat && ccc in mat[rrr] && mat[rrr][ccc] < mat[r][c]) {
                        outdegree[[rrr, ccc]]--
                        if (outdegree[[rrr, ccc]] === 0) {
                            q.push([rrr, ccc])
                        }
                    }
                }
            }
        }
    }
    return res
}

class Heap {
    constructor(compare) {
        this.compare = compare
        this.h = []
    }
    push(a) {
        this.h.push(a)
        this.bubbleUp(this.h.length-1)
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
    bubbleUp(c) {
        let p = Math.ceil(c/2)-1
        while (p in this.h && this.compare(this.h[p], this.h[c])) {
            this.swap(p, c)
            c = p
            p = Math.ceil(c/2)-1
        }
    }
    swap(a, b) {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]]
    }
}

var longestIncreasingPath = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(1))
    const minHeap = new Heap((a, b) => a[0] < b[0])
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            minHeap.push([mat[r][c], r, c])
        }
    }
    let res = 1
    while (minHeap.h.length) {
        const [v, r, c] = minHeap.pop()
        for (const [rr, cc] of dirs) {
            const rrr = rr + r
            const ccc = cc + c
            if (!(rrr in mat) || !(ccc in mat[rrr]) || mat[rrr][ccc] <= mat[r][c]) continue
            dp[r][c] = Math.max(dp[r][c], 1 + dp[rrr][ccc])
        }
        res = Math.max(res, dp[r][c])
    }
    return res
}
