/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    class Trie {
        constructor() {
            this.children = {}
            this.ends = 0
            this.word = ''
        }
        insert(word) {
            let cur = this
            for (let c of word.split("")) {
                if (!cur.children[c]) {
                    cur.children[c] = new Trie()
                    cur.children[c].word = cur.word + c
                }
                cur = cur.children[c]
            }
            cur.ends++
        }
    }
    
    const trie = new Trie()
    words.forEach(word => trie.insert(word))
    const res = []
    for (let i=0; i < board.length; i++) {
        for (let j=0; j < board[i].length; j++) {
            helper(i, j, trie)
        }
    }
    return res
    
    function helper(i, j, cur) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === '$' || !cur.children[board[i][j]]) return
        
        cur = cur.children[board[i][j]]
        if (cur.ends > 0) {
            res.push(cur.word)
            cur.ends--
        }
        
        const temp = board[i][j]
        board[i][j] = '$'
        helper(i+1, j, cur)
        helper(i-1, j, cur)
        helper(i, j+1, cur)
        helper(i, j-1, cur)
        board[i][j] = temp
    }
};