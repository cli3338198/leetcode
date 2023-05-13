class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        # nums.sort(reverse=True)
        # return (nums[0] * nums[1]) - (nums[-1] * nums[-2])
        
        max1 = max2 = float('-inf')
        min1 = min2 = float('inf')
        for n in nums:
            if n >= max1:
                max2 = max1
                max1 = n
            elif n > max2:
                max2 = n
            if n <= min1:
                min2 = min1
                min1 = n
            elif n < min2:
                min2 = n
        return (max1 * max2) - (min1 * min2)
                