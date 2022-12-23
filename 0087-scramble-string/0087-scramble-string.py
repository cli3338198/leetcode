class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
        
        def helper(s1: str, s2: str) -> bool:
            key = (s1, s2)
            
            if key in dp:
                return dp[key]
            
            if sorted(s1) != sorted(s2):
                dp[key] = False
                return dp[key]
            
            if s1 == s2:
                dp[key] = True
                return dp[key]

            for i in range(1, len(s1)):
                if (helper(s1[:i:], s2[:i:]) and helper(s1[i::], s2[i::])) or (helper(s1[i::], s2[:-i:]) and helper(s1[:i:], s2[-i::])):
                    dp[key] = True
                    return dp[key]
                
            dp[key] = False
            return dp[key]
        
        dp = {}
        return helper(s1, s2)