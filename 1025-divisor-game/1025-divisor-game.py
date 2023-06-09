class Solution:
    def divisorGame(self, n: int) -> bool:
        
        @lru_cache(None)
        def helper(n: int) -> bool:
            if n == 2: 
                return True
            if n < 2:
                return False
            for x in range(1, n):
                if n % x == 0 and not helper(n - x):
                    return True
            return False
        
        return helper(n)