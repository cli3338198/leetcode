class Trie {
    public children: Record<string, Trie>
    public word: string
    public end: boolean
    constructor() {
        this.children = {}
        this.word = ''
        this.end = false
    }
}

function longestWord(words: string[]): string {
    words.sort()
    const trie = new Trie()
    let res = ''
    for (const word of words) {
        let cur = trie
        for (let i=0; i < word.length; i++) {
            if (!(word[i] in cur.children) && i < word.length-1) break
            if (!(word[i] in cur.children)) {
                cur.children[word[i]] = new Trie()
                cur.children[word[i]].word = cur.word + word[i]
            }
            cur = cur.children[word[i]]
            if (i === word.length-1 && cur.word.length > res.length) {
                res = cur.word
            }
        }
    }
    return res
};