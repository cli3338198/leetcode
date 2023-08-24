class Trie {
    constructor(public children = {}, public count = 0) {}
    insert(arr: number[]) {
        let cur = this
        for (const n of arr) {
            if (!(n in cur.children)) {
                cur.children[n] = new Trie()
            }
            cur.children[n].count++
            cur = cur.children[n]
        }
    }
    find(arr: number[]): number {
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

function equalPairs(grid: number[][]): number {
    const trie = new Trie()
    grid.forEach(row => trie.insert(row))
    const n = grid.length
    let res = 0
    for (let c=0, arr=[]; c < n; c++, arr=[]) {
        for (let r=0; r < n; r++) {
            arr.push(grid[r][c])
        }
        res += trie.find(arr)
    }
    return res
};