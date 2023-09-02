class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        up = down = 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                up = down + 1
            elif nums[i] < nums[i-1]:
                down = up + 1
        return max(up, down)
        
        #
        
        dp = [[1, 1] for _ in range(0, len(nums))]
        for i in range(1, len(nums)):
            for j in range(0, i):
                if nums[j] > nums[i]:
                    dp[i][0] = max(dp[i][0], 1 + dp[j][1])
                elif nums[j] < nums[i]:
                    dp[i][1] = max(dp[i][1], 1 + dp[j][0])
        return max(dp[-1])