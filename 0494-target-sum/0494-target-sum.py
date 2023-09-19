class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        @lru_cache(None)
        def backtrack(i: int, cur: int) -> int:
            nonlocal nums, target
            if i >= len(nums):
                return 1 if cur == target else 0
            return backtrack(i+1, cur+nums[i]) + backtrack(i+1, cur-nums[i])
        
        return backtrack(0, 0)
            