/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length
    const cnts = {}
    for (const row of grid) {
        const key = "|" + row.join("|")
        cnts[key] = cnts[key] + 1 || 1
    }
    let res = 0
    for (let c=0; c < n; c++) {
        let key = ""
        for (let r=0; r < n; r++) {
            key += "|" + grid[r][c]
        }
        res += cnts[key] || 0
    }
    return res
};

equalPairs = function(grid) {
    class Trie {
        constructor() {
            this.children = {}
            this.count = 0
            this.end = false
        }
        insert(arr) {
            let cur = this
            for (const n of arr) {
                if (!(n in cur.children)) {
                    cur.children[n] = new Trie()
                }
                cur.children[n].count++
                cur = cur.children[n]
            }
            cur.end = true
        }
        find(arr) {
            let cur = this
            for (const n of arr) {
                if (n in cur.children) {
                    cur = cur.children[n]
                } else {
                    return 0
                }
            }
            return cur.count
        }
    }
    
    const n = grid.length
    const trie = new Trie()
    for (const row of grid) {
        trie.insert(row)
    }
    let res = 0
    for (let c=0; c < n; c++) {
        const arr = []
        for (let r=0; r < n; r++) {
            arr.push(grid[r][c])
        }
        res += trie.find(arr)
    }
    return res
}