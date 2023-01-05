class Solution:
    def integerReplacement(self, n: int) -> int:
        
        @lru_cache(None)
        def helper(n: int) -> int:
            if n == 1: return 0
            if n % 2 == 0: return 1 + helper(n // 2)
            return 1 + min(1 + helper((n+1) // 2), helper(n-1))
        
        return helper(n)