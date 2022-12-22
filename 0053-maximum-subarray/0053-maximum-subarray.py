class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curSum = nums[0]
        maxSum = nums[0]
        
        for i in range(1, len(nums)):
            curSum = max(nums[i], nums[i] + curSum)
            maxSum = max(maxSum, curSum)
        
        return maxSum