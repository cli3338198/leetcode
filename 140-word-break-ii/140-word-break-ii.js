/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

class Trie {
    constructor() {
        this.children = {}
        this.end = false
        this.word = ''
    }
    insert(word) {
        let cur = this
        for (let char of word) {
            if (!(char in cur.children)) {
                cur.children[char] = new Trie()
                cur.children[char].word += cur.word + char
            }
            cur = cur.children[char]
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
    
    function helper(idx, curTrie, list) {
        if (idx >= s.length && curTrie.end) {
            return res.push([...list, curTrie.word])
        }
        if (curTrie.end) {
            helper(idx, trie, [...list, curTrie.word])
        }
        const char = s[idx]
        if (char in curTrie.children) {
            helper(idx+1, curTrie.children[char], list)
        }
    }
};