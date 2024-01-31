class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        return [n for n in nums if n % 2 == 0] + [n for n in nums if n % 2 != 0]