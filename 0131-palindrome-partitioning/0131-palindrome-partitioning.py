class Solution:
    def partition(self, s: str) -> List[List[str]]:
        
        dp = [[] * (len(s) + 1) for _ in range(len(s) + 1)]
        
        dp[-1].append([])
        
        for i in range(len(s)-1, -1, -1):
            for j in range(i+1, len(s) + 1):
                sub = s[i:j:]
                
                if sub == sub[::-1]:

                    for r in dp[j]:
                        dp[i].append([sub, *r])
                        
        return dp[0]