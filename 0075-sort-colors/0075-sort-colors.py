class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        a, b, c = 0, 0, len(nums)-1
        
        while b <= c:
            if nums[b] == 0:
                nums[a], nums[b] = nums[b], nums[a]
                a += 1
            
            elif nums[b] == 2:
                nums[b], nums[c] = nums[c], nums[b]
                b -= 1
                c -= 1
            
            b += 1
        
        return nums