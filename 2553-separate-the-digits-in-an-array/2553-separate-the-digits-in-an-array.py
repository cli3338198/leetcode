class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        def separate(num: int) -> List[int]:
            res = []
            while num != 0:
                res.append(num % 10)
                num //= 10
            return res[::-1]
        
        res = []
        for num in nums:
            res += separate(num)
        return res