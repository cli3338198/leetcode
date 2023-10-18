class Trie:
    def __init__(self):
        self.children = {}
        self.end = False
    
    def insert(self, word: str) -> None:
        cur = self
        for c in word:
            if c not in cur.children:
                cur.children[c] = Trie()
            cur = cur.children[c]
        cur.end = True
        
    def find(self, word: str, cur) -> bool:
        if len(word) == 0:
            return cur.end
        if word[0] not in cur.children:
            return False
        for child in cur.children:
            if word[0] == child and self.find(word[1::], cur.children[child]):
                return True
        return False

class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        trie = Trie()
        for word in dictionary:
            trie.insert(word)
        n = len(s)
        dp = [0] * (n+1)
        for i in range(1, n+1):
            dp[i] = 1 + dp[i-1]
            for j in range(0, i):
                if trie.find(s[j:i:], trie):
                    dp[i] = min(dp[i], dp[j])
        return dp[n]
        
        #
        
        n = len(s)
        dp = [0] * (n+1)
        for i in range(1, n+1):
            dp[i] = 1 + dp[i-1]
            for j in range(0, i):
                if s[j:i:] in dictionary:
                    dp[i] = min(dp[i], dp[j])
        return dp[n]