class UF:
    def __init__(self):
        self.root = {}
        self.size = {}
        self.max = 0
    
    def insert(self, n: int) -> None:
        if n not in self.root:
            self.root[n] = n
            self.size[n] = 1
            self.max = max(self.max, self.size[n])
            
    def find(self, n: int) -> int:
        self.insert(n)
        if self.root[n] != n:
            self.root[n] = self.find(self.root[n])
        return self.root[n]
    
    def union(self, m: int, n: int) -> None:
        r1, r2 = self.find(m), self.find(n)
        if r1 != r2:
            self.root[r2] = r1
            self.size[r1] += self.root[r2]
            self.max = max(self.max, self.size[r1])

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums, res = set(nums), 0
        for n in nums:
            if n-1 not in nums:
                cur, i = 0, n
                while n in nums:
                    n += 1
                    cur += 1
                res = max(res, cur)
        return res
        
        #
        
        uf, nums = UF(), set(nums)
        for n in nums:
            if n+1 in nums:
                uf.union(n, n+1)
        return uf.max
            
                
            