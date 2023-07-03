class Solution:
    @lru_cache(None)
    def helper(self, n: int, eggs: int) -> int:
        if n < 2:
            return n
        if eggs == 1:
            return n
        res = float("inf")
        for i in range(1, n):
            res = min(res, 1 + max(self.helper(i-1, eggs-1), self.helper(n-i, eggs)))
        return res        
        
    def twoEggDrop(self, n: int) -> int:
        return self.helper(n, 2)
        