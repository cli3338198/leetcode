
var Trie = function() {
        this.children = {}
        this.end = false
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this
    for (let char of word) {
        if (!(char in cur.children)) {
            cur.children[char] = new Trie()
        }
        cur = cur.children[char]
    }
    cur.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, prefix) {
    let cur = this
    for (let char of word) {
        if (!(char in cur.children)) return false
        cur = cur.children[char]
    }
    if (prefix) return true
    return cur.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */