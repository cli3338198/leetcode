class UF:
    def __init__(self):
        
        self.root = {}
        self.size = {}
        self.max = 0
    
    def insert(self, a: str) -> None:
        
        if a not in self.root:
            self.root[a] = a
            self.size[a] = 1
            self.max = max(self.max, self.size[a])
            
    def find(self, a: str) -> str:
        
        self.insert(a)
        
        if self.root[a] != a:
            self.root[a] = self.find(self.root[a])
        
        return self.root[a]
    
    def union(self, a: str, b: str) -> None:
        
        a_ = self.find(a)
        b_ = self.find(b)
        
        if a_ == b_: return
        
        self.root[b_] = a_
        self.size[a_] += self.size[b_]
        self.max = max(self.max , self.size[a_])
        

class Solution:    
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        
        uf = UF()

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    uf.insert(f"{r} {c}")
                    
                    for rr, cc in dirs:
                        rrr = rr + r
                        ccc = cc + c
                        
                        if rrr >= 0 and rrr < len(grid) and ccc >= 0 and ccc < len(grid[rrr]) and grid[rrr][ccc] == 1:
                            uf.union(f"{r} {c}", f"{rrr} {ccc}")
                    
        return uf.max
                    
        