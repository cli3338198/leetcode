class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        
        n = len(s)
        wordDict = set(wordDict)
        
        dp = [False] * (n + 1)
        dp[0] = True
        
        for i in range(1, n+1):
            for j in range(0, i):
                if s[j:i:] in wordDict and dp[j]:
                    dp[i] = True
                    
        return dp[n]
        