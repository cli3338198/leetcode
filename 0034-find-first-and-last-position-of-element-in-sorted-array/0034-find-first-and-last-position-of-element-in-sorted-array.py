class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums)-1
        while l <= r:
            m = (l+r)//2
            if nums[m] == target:
                l = r = m
                while l > -1 and nums[l] == nums[m]:
                    l -= 1
                while r < len(nums) and nums[r] == nums[m]:
                    r += 1
                return [l+1, r-1]
            elif nums[m] > target:
                r = m - 1
            else:
                l = m + 1
        return [-1, -1]