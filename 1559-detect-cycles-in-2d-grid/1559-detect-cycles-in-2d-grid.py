class UF:
    def __init__(self):
        self.root = {}
    
    def add(self, a: str) -> None:
        if a not in self.root:
            self.root[a] = a
    
    def find(self, a: str) -> str:
        if self.root[a] != a:
            self.root[a] = self.find(self.root[a])
        return self.root[a]
    
    def union(self, a: str, b: str) -> bool:
        a, b = self.find(a), self.find(b)
        if a == b:
            return False
        self.root[b] = a

class Solution:
    def to_string(self, r: int, c: int) -> str:
        return f"{r} {c}"
    
    def containsCycle(self, grid: List[List[str]]) -> bool:
        uf = UF()
        for r in range(0, len(grid)):
            for c in range(0, len(grid[r])):
                uf.add(self.to_string(r, c))
                for rr, cc in [[r+1, c], [r, c+1]]:
                    if rr < 0 or rr >= len(grid) or cc < 0 or cc >= len(grid[rr]) or grid[rr][cc] != grid[r][c]:
                        continue
                    uf.add(self.to_string(rr, cc))
                    if uf.union(self.to_string(r, c), self.to_string(rr, cc)) == False:
                        return True
        return False