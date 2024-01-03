class Solution:
    def predictTheWinner(self, nums: List[int]) -> bool:
        n = len(nums)
        dp = [[0] * n for _ in range(0, n)]
        for i in range(0, n):
            dp[i][i] = nums[i]
        for length in range(2, n+1):
            for i in range(0, n-length+1):
                j = i+length-1
                dp[i][j] = max(nums[i]-dp[i+1][j], nums[j]-dp[i][j-1])
        return dp[0][n-1] >= 0
        
        #
        
        @lru_cache(None)
        def rec(i: int, j: int) -> int:
            if i > j:
                return 0
            if i == j:
                return nums[i]
            left = nums[i] + min(rec(i+2, j), rec(i+1, j-1))
            right = nums[j] + min(rec(i+1, j-1), rec(i, j-2))
            return max(left, right)
        
        total = sum(nums)
        player1 = rec(0, len(nums)-1)
        player2 = total - player1
        return player1 >= player2
            
            