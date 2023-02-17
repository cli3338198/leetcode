class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        
        dp = [[] for _ in range(n+1)]
        dp[0] += [""]
        
        for i in range(1, n+1):
            for j in range(i):
                for sub1 in dp[i-j-1]:
                    for sub2 in dp[j]:
                        dp[i] += [sub1 + "(" + sub2 + ")"]
        
        return dp[n]