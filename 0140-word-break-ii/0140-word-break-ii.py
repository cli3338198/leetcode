class Trie:
    def __init__(self):
        self.children = dict()
        self.word = ''
        self.end = False
    
    def insert(self, word: str) -> None:
        cur = self
        
        for c in word:
            if not c in cur.children:
                cur.children[c] = Trie()
                cur.children[c].word = cur.word + c
                
            cur = cur.children[c]
            
        cur.end = True

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        
        trie = Trie()
        
        for word in wordDict:
            trie.insert(word)
        
        def helper(idx: int, curTrie: Trie, list: List[str]) -> None:         
            if idx >= len(s):
                if curTrie.end:
                    c = list.copy()
                    c.append(curTrie.word)
                    res.append(c)
                return
            
            if curTrie.end:
                list.append(curTrie.word)
                helper(idx, trie, list)
                list.pop()
                
            if s[idx] in curTrie.children:
                helper(idx+1, curTrie.children[s[idx]], list)
                
        res = []
        
        helper(0, trie, [])
        
        return map(lambda l: " ".join(l), res)
        