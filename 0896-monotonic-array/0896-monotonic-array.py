class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        if len(nums) <= 1:
            return True
        inc = dec = True
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                inc = False
            elif nums[i] < nums[i - 1]:
                dec = False
            if not inc and not dec:
                return False
        return True
                
        
        #
        
        increasing = all(nums[i] <= nums[i + 1] for i in range(0, len(nums) - 1))
        decreasing = all(nums[i] >= nums[i + 1] for i in range(0, len(nums) - 1))
        return increasing or decreasing
        
        #
        
        inc = dec = False
        last = nums[0]
        for i in range(1, len(nums)):
            n = nums[i]
            if n == last:
                continue
            elif n >= last and not inc and not dec:
                inc = True
            elif n <= last and not inc and not dec:
                dec = True
            if n >= last and not inc:
                return False
            if n <= last and not dec:
                return False
            last = n
        return True