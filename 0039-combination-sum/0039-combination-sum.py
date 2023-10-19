class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        dp = [[] for _ in range(0, target+1)]
        dp[0].append([])
        for c in candidates:
            for t in range(1, target+1):
                if c <= t:
                    for j in dp[t-c]:
                        dp[t].append(j + [c])
        return dp[target]
        
        #
        
        dp = [[] for _ in range(0, target+1)]
        dp[0].append([])
        for i in range(0, target+1):
            for c in candidates:
                if c <= i:
                    for j in dp[i-c]:
                        dp[i].append(j + [c])
        return list(set(map(tuple, map(sorted, dp[target]))))