class Trie:
    def __init__(self):
        self.children = {}
        self.word = ""
        self.size = 0
    
    def insert(self, word: str) -> None:
        cur = self
        for c in word:
            if c not in cur.children:
                cur.children[c] = Trie()
                cur.children[c].word = cur.word + c
            cur.children[c].size += 1
            cur = cur.children[c]
            
    def findLongest(self, numberWords: int) -> str:
        cur = self
        while True:
            haveFound = False
            for c in cur.children:
                if cur.children[c].size == numberWords:
                    cur = cur.children[c]
                    haveFound = True
            if not haveFound:
                break
        return cur.word
        
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()
        a, b, res = strs[0], strs[-1], ""
        i = j = 0
        while i < len(a) and j < len(b) and a[i] == b[j]:
            res += a[i]
            i += 1
            j += 1
        return res
        
        #
        
        trie = Trie()
        for word in strs:
            trie.insert(word)
        return trie.findLongest(len(strs))
            