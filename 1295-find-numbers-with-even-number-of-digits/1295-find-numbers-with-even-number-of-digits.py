class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        # return sum([1 for num in nums if len(str(num)) % 2 == 0])
        
        res = 0
        for num in nums:
            digits = 0
            while num:
                num //= 10
                digits += 1
            if digits % 2 == 0:
                res += 1
        return res