function replaceWords(dictionary: string[], sentence: string): string {
    class Trie {
        private children: Record<string, Trie>
        private word: string
        private end: boolean
        constructor() {
            this.children = {}
            this.word = ""
            this.end = false
        }
        insert(word: string) {
            let cur: Trie = this as Trie
            for (const c of word) {
                if (!(c in cur.children)) {
                    cur.children[c] = new Trie()
                    cur.children[c].word = cur.word + c
                }
                cur = cur.children[c]
            }
            cur.end = true
        }
        find(word: string) {
            let cur: Trie = this as Trie
            for (const c of word) {
                if (cur.end === true) return cur.word
                cur = cur.children[c]
                if (!cur) break
            }
            return word
        }
    }
    
    const trie = new Trie()
    dictionary.forEach(word => trie.insert(word))
    return sentence.split(" ").map(word => trie.find(word)).join(" ")
};