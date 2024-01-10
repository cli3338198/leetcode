class Solution:
    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:
        @lru_cache(None)
        def rec(i: int, target: int, last_color: int) -> int:
            if target < 0:
                return inf
            if i >= m:
                return 0 if target == 0 else inf
            if houses[i] != 0:
                if last_color != houses[i]:
                    target -= 1
                return rec(i+1, target, houses[i])
            res = inf
            for color in range(1, n+1):
                res = min(res, cost[i][color-1] + rec(i+1, target - (1 if last_color != color else 0), color))
            return res
        
        ans = rec(0, target, 0)
        return ans if ans != inf else -1