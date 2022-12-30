class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        
        n = len(nums)
        
        nums.sort(key=lambda l: l)
        
        dp = [1] * n
        
        length = 1
        
        for i in range(1, n):
            for j in range(0, i):
                if nums[i] % nums[j] == 0:
                    dp[i] = max(dp[i], 1 + dp[j])
                    
            length = max(length, dp[i])
        
        res = []
        prev = None
        
        for i in range(n-1, -1, -1):
            if length and (prev == None or prev % nums[i] == 0) and dp[i] == length:
                length -= 1
                prev = nums[i]
                res.append(nums[i])
                
        return res[::-1]