class Trie {
    children: Record<string, Trie>
    prefix: string
    common: number
    constructor() {
        this.children = {}
        this.prefix = ""
        this.common = 0
    }
    insert(word: string) {
        let cur: Trie = this
        for (const char of word) {
            if (!(char in cur.children)) {
                cur.children[char] = new Trie()
                cur.children[char].prefix = cur.prefix + char
            }
            cur.children[char].common++
            cur = cur.children[char]
        }
    }
    findCommonPrefix(common: number) {
        let cur: Trie = this
        while (true) {
            let hasFound = false
            for (const child in cur.children) {
                if (cur.children[child].common === common) {
                    cur = cur.children[child]
                    hasFound = true
                }
            }
            if (!hasFound) break
        }
        return cur.prefix
    }
}

function longestCommonPrefix(strs: string[]): string {
    strs.sort()
    let i = 0
    while (i < strs[0].length && i < strs[strs.length-1].length) {
        if (strs[0][i] === strs[strs.length-1][i]) {
            i++
        } else {
            break
        }
    }
    return strs[0].substring(0, i)
    
    //
    
    const trie = new Trie()
    for (const str of strs) {
        trie.insert(str)
    }
    return trie.findCommonPrefix(strs.length)
};