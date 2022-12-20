class Solution:
    def generateParenthesis(self, n: int) -> List[str]:     
        dp = [[[] * (n + 1) for _ in range(n+1)] for _ in range(n+2)]
        
        dp[1][1].append('(')
        
        for open in range(1, len(dp)):
            for close in range(1, len(dp[0])):
                if open - 1 > close: continue
                for k in dp[open-1][close]:
                    dp[open][close].append(k + ')')
                for k in dp[open][close-1]:
                    dp[open][close].append(k + '(')
        
        return dp[len(dp) - 1][len(dp[0]) - 1]