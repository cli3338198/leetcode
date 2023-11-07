class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        dp = [[] for _ in range(0, target+1)]
        dp[0].append([])
        for n in candidates:
            for t in range(target, n-1, -1):
                if n <= t:
                    for j in dp[t-n]:
                        if j + [n] not in dp[t]:
                            dp[t].append(j + [n])
        return dp[target]