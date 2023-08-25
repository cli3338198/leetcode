/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    class Trie {
        constructor() {
            this.children = {}
            this.str = ""
            this.end = false
        }
    }
    
    const trie = new Trie()
    for (let i=1; i <= n; i++) {
        const str = String(i)
        let cur = trie
        for (const c of str) {
            if (!(c in cur.children)) {
                cur.children[c] = new Trie()
            }
            cur = cur.children[c]
        }
        cur.str = str
        cur.end = true
    }
    const res = []
    dfs(trie)
    return res
    
    function dfs(cur) {
        if (cur.end === true) res.push(cur.str)
        for (let i=0; i < 10; i++) {
            if (String(i) in cur.children) {
                dfs(cur.children[String(i)])
            }
        }
    }
};