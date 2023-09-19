class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        dp = defaultdict(lambda: [])
        dp[0] = [[]]
        for c in candidates:
            for t in range(1, target+1):
                for combo in dp[t-c]:
                    dp[t].append([*combo, c])
        return dp[target]
        
        #
        
        res = []
        
        def backtrack(idx: int, cur: List[int], target: int) -> None:
            nonlocal res, candidates
            if target == 0:
                res.append(cur)
                return
            else:
                for i in range(idx, len(candidates)):
                    if candidates[i] <= target:
                        backtrack(i, [*cur, candidates[i]], target-candidates[i])
        
        backtrack(0, [], target)
        return res