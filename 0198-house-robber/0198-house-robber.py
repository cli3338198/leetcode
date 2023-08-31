class Solution:
    def rob(self, nums: List[int]) -> int:
        a = b = 0
        for n in nums:
            a, b = b, max(b, a + n)
        return max(a, b)