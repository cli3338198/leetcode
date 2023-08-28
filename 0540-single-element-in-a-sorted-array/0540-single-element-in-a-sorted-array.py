class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            m = (l+r)//2
            if m > 0 and m % 2 != 0:
                m -= 1
            if nums[m] != nums[m+1]:
                r = m
            else:
                l = m + 2
        return nums[l]