class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
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