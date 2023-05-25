class Solution:
    def bin_search(self, nums: List[int], original: int) -> bool:
        l, r = 0, len(nums)-1
        while l <= r:
            m = (l+r)//2
            if nums[m] == original:
                return True
            elif nums[m] > original:
                r = m - 1
            else:
                l = m + 1
        return False
    
    def findFinalValue(self, nums: List[int], original: int) -> int:         
        nums.sort()
        if self.bin_search(nums, original):
            return self.findFinalValue(nums, original*2)
        return original