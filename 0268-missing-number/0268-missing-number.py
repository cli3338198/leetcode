class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        cur_sum = 0
        for i in range(0, len(nums) + 1):
            cur_sum += i
        for n in nums:
            cur_sum -= n
        return cur_sum
        
        #
        
        for i in range(0, len(nums)):
            if nums[i] != i:
                return i
        return len(nums)