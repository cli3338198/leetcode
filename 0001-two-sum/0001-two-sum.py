class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums = sorted([[n, i] for i, n in enumerate(nums)])
        l, r = 0, len(nums)-1
        while l < r:
            cursum = nums[l][0] + nums[r][0]
            if cursum == target:
                return [nums[l][1], nums[r][1]]
            elif cursum > target:
                r -= 1
            else:
                l += 1