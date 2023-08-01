class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def swap(i: int, j: int) -> None:
            nonlocal nums
            nums[i], nums[j] = nums[j], nums[i]
        
        last_non_zero_idx = 0
        for i, n in enumerate(nums):
            if n != 0:
                swap(last_non_zero_idx, i)
                last_non_zero_idx += 1
        