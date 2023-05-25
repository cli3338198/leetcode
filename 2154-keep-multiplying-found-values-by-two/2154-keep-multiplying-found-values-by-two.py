class Solution:
    def findFinalValue(self, nums: List[int], original: int) -> int:
        def bin_search(original: int, l: int, r: int, nums: List[int]) -> bool: 
            while l <= r:
                m = (l+r)//2
                if nums[m] == original:
                    return True
                elif nums[m] > original:
                    r = m - 1
                else:
                    l = m + 1
            return False
        nums.sort()
        if bin_search(original, 0, len(nums)-1, nums):
            return self.findFinalValue(nums, original*2)
        return original