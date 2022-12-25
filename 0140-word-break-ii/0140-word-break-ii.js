/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
class Trie {
    constructor() {
        this.children = {}
        this.word = ''
        this.end = false
    }
    insert(word) {
        let cur = this
        for (const c of word) {
            if (!(c in cur.children)) {
                cur.children[c] = new Trie()
                cur.children[c].word = cur.word + c
            }
            cur = cur.children[c]
        }
        cur.end = true
    }
}

var wordBreak = function(s, wordDict) {
    const trie = new Trie()
    for (const word of wordDict) {
        trie.insert(word)
    }
    const res = []
    helper(0, trie, [])
    return res.map(arr => arr.join(" "))
    
    function helper(idx, cur, list) {
        if (idx === s.length && cur.end) {
            return res.push([...list, cur.word])
        }
        if (cur.end) {
            helper(idx, trie, [...list, cur.word])
        }
        if (s[idx] in cur.children) {
            helper(idx+1, cur.children[s[idx]], list)
        }
    }
};