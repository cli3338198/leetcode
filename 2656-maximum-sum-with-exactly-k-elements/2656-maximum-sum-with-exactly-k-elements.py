class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        mx = res = max(nums)
        for i in range(2, k+1):
            res += mx + i - 1
        return res