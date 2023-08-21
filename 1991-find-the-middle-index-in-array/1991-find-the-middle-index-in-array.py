class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        lsum, rsum = 0, sum(nums)
        for i in range(0, len(nums)):
            if lsum == rsum - nums[i]:
                return i
            lsum += nums[i]
            rsum -= nums[i]
        return -1