class Trie:
    def __init__(self):
        self.children = {}
        self.str = ""
        self.end = False
        
    def add(self, digits: str) -> None:
        cur = self
        for d in digits:
            if d not in cur.children:
                cur.children[d] = Trie()
            cur = cur.children[d]
        cur.str = digits
        cur.end = True
        
    def dfs(self, cur: None = None, res: List[str] = []) -> List[str]:
        if cur == None:
            cur = self
        if cur.end == True:
            res.append(cur.str)
        for d in range(0, 10):
            if str(d) in cur.children:
                self.dfs(cur.children[str(d)], res)
        return res

class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        trie = Trie()
        for n in range(1, n+1):
            trie.add(str(n))
        return map(int, trie.dfs(res=[]))