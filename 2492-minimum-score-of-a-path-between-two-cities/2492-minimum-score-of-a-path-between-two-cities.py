class UF:
    def __init__(self):
        self.root = {}
    
    def insert(self, a: int) -> None:
        if a not in self.root:
            self.root[a] = a
    
    def find(self, a: int) -> int:
        self.insert(a)
        if self.root[a] != a:
            self.root[a] = self.find(self.root[a])
        return self.root[a]
    
    def union(self, a: int, b: int) -> None:
        a, b = self.find(a), self.find(b)
        if a != b:
            self.root[b] = a

class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        uf = UF()
        for u, v, _ in roads:
            uf.union(u, v)
        res = float("inf")
        root = uf.find(1)
        for u, v, d in roads:
            u, v = uf.find(u), uf.find(v)
            if u == root or v == root:
                res = min(res, d)
        return res
        
        graph = {}
        for u, v, d in roads:
            if u not in graph:
                graph[u] = []
            if v not in graph:
                graph[v] = []
            graph[u].append([v, d])
            graph[v].append([u, d])
        
        def dfs(n: int, seen: set) -> int:
            nonlocal graph
            seen.add(n)
            res = float("inf")
            for next, d in graph[n]:
                res = min(res, d)
                if next not in seen:
                    res = min(res, dfs(next, seen))
            return res
        
        return dfs(1, set())