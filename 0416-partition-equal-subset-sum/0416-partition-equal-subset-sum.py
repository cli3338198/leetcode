class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total_sum, n = sum(nums), len(nums)
        half_sum = total_sum // 2
        if half_sum != total_sum / 2:
            return False
        nums.sort()
        dp = [[False] * (half_sum + 1) for _ in range(0, n+1)]
        dp[0][0] = True
        for i in range(1, n+1):
            for cur_sum in range(0, half_sum+1):
                dp[i][cur_sum] = dp[i-1][cur_sum]
                if cur_sum == 0:
                    continue
                if nums[i-1] <= cur_sum:
                    dp[i][cur_sum] = dp[i][cur_sum] or dp[i-1][cur_sum-nums[i-1]]
                if cur_sum == half_sum and dp[i][cur_sum]:
                    return True
        return False
        
        # 
        
        def backtrack(i: int, half_sum: int) -> bool:
            if half_sum < 0 or i >= len(nums):
                return False
            if half_sum == 0:
                return True
            return backtrack(i+1, half_sum - nums[i]) or backtrack(i+1, half_sum)
        
        return backtrack(0, half_sum)