class Trie:
    def __init__(self):
        self.children = {}
        self.count = 0
    
    def insert(self, arr: List[int]) -> None:
        cur = self
        for n in arr:
            if str(n) not in cur.children:
                cur.children[str(n)] = Trie()
            cur.children[str(n)].count += 1
            cur = cur.children[str(n)]
    
    def find(self, arr: List[int]) -> int:
        cur = self
        for n in arr:
            if str(n) in cur.children:
                cur = cur.children[str(n)]
            else:
                return 0
        return cur.count

class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        n, trie, res = len(grid), Trie(), 0
        for row in grid:
            trie.insert(row)
        for c in range(0, n):
            arr = []
            for r in range(0, n):
                arr.append(grid[r][c])
            res += trie.find(arr)
        return res
            
            
        n, cnt, res = len(grid), {}, 0
        for row in grid:
            key = "|" + "|".join([str(c) for c in row])
            cnt[key] = cnt.get(key, 0) + 1
        for c in range(0, n):
            key = ""
            for r in range(0, n):
                key += "|" + str(grid[r][c])
            res += cnt.get(key, 0)
        return res
        