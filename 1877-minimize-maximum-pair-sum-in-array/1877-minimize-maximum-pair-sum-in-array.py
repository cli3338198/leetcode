class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()
        ans = -inf
        for i in range(0, len(nums)//2): 
            ans = max(ans, nums[i] + nums[-1-i])
        return ans
        