class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        
        n = len(nums)
        
        dp = [[0] * n for _ in range(n)]
        
        for length in range(1, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                
                for k in range(i, j + 1):
                    left_dp = dp[i][k-1] if k - 1 >= 0 else 0
                    right_dp = dp[k+1][j] if k + 1 < n else 0
                    left_num = nums[i-1] if i - 1 >= 0 else 1
                    right_num = nums[j+1] if j + 1 < n else 1
                    
                    dp[i][j] = max(
                        dp[i][j],
                        left_dp + left_num * nums[k] * right_num + right_dp
                    )
        
        return dp[0][n-1]