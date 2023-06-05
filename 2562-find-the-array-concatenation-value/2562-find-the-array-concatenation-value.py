class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        res, left, right = 0, 0, len(nums)-1
        while left <= right:
            if left == right:
                res += nums[left]
            else:
                res += int(str(nums[left]) + str(nums[right]))
            left += 1
            right -= 1
        return res