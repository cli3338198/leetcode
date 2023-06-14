class UF:
    def __init__(self):
        self.root = {}
    
    def add(self, a: int) -> None:
        if a not in self.root:
            self.root[a] = a
    
    def find(self, a: int) -> int:
        self.add(a)
        if self.root[a] != a:
            self.root[a] = self.find(self.root[a])
        return self.root[a]

    def union(self, a: int, b: int) -> None:
        A = self.find(a)
        B = self.find(b)
        if A != B:
            self.root[b] = A
    
    def get_roots(self) -> List[int]:
        res = []
        for key, val in self.root.items():
            if int(key) == val:
                res.append(val)
        return res

class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        uf = UF()
        for u, v in edges:
            uf.union(u, v)
        return uf.get_roots()