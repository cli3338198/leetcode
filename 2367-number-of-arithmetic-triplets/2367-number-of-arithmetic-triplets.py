class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        mp, res = {}, 0
        for i, n in enumerate(nums):
            mp[n] = i
        for i, n in enumerate(nums):
            if mp.get(n-diff, float("inf")) < i and mp.get(n+diff, float("-inf")) > i:
                res += 1
        return res