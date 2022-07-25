
var WordDictionary = function() {
    this.children = {}
    this.end = false
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this
    for (let char of word) {
        if (!(char in cur.children)) {
            cur.children[char] = new WordDictionary()
        }
        cur = cur.children[char]
    }
    cur.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, cur = this) {
    for (let i=0; i < word.length; i++) {
        if (word[i] === '.') {
            for (let child in cur.children) {
                if (this.search(word.slice(i+1), cur.children[child])) return true
            }
            return false
        } else if (word[i] in cur.children) {
            cur = cur.children[word[i]]
        } else {
            return false
        }
    }
    return cur.end
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */