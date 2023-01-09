class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        
        n = len(nums)
        dp = [[1, 1] for _ in range(n)]
        max_len = 0
        res = 0
        
        for i in range(n):
            for j in range(i):
                if nums[j] < nums[i]:
                    if dp[j][0] + 1 == dp[i][0]:
                        dp[i][1] += dp[j][1]
                    if dp[j][0] + 1 > dp[i][0]:
                        dp[i] = [1 + dp[j][0], dp[j][1]]
                        
            if max_len == dp[i][0]:
                res += dp[i][1]
            elif max_len < dp[i][0]:
                max_len = dp[i][0]
                res = dp[i][1]
        
        return res
        