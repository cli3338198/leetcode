/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let res = 0
    for (const word of words) {
        for (let i=0; i < word.length; i++) {
            if (word[i] !== pref[i]) break
            if (i === pref.length-1) res++
        }
    }
    return res
};

prefixCount = function(words, pref) {
    class Trie {
        constructor() {
            this.children = {}
            this.size = 0
        }
        insert(word) {
            let cur = this
            for (const char of word) {
                if (!(char in cur.children)) {
                    cur.children[char] = new Trie()
                }
                cur = cur.children[char]
                cur.size++
            }
        }
        find(pref) {
            let cur = this
            for (const char of pref) {
                if (!(char in cur.children)) return 0
                cur = cur.children[char]
            }
            return cur.size
        }
    }
    const t = new Trie()
    for (const word of words) {
        t.insert(word)
    }
    return t.find(pref)
}