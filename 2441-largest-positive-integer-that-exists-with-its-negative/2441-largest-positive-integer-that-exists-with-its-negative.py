class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        seen, res = set(), float("-inf")
        for n in nums:
            if -n in seen:
                res = max(res, abs(n))
            seen.add(n)
        return res if res != float("-inf") else -1