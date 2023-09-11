class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
        
        @lru_cache(None)
        def helper(is_alice: bool, i: int, m: int) -> int:
            if i >= len(piles):
                return 0
            res, stones = 0 if is_alice else inf, 0
            for x in range(1, 2*m+1):
                if i + x > len(piles):
                    break
                stones += piles[i+x-1]
                if is_alice:
                    res = max(res, stones + helper(not is_alice, i+x, max(m, x)))
                else:
                    res = min(res, helper(not is_alice, i+x, max(m, x)))
            return res
        
        return helper(True, 0, 1)
            