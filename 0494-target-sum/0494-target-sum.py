class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        def get_key(a: int, b: int) -> str:
            return f"{a} {b}"
        
        total = sum(nums)
        dp = defaultdict(lambda: 0)
        dp[get_key(0, nums[0]+total)] = 1
        dp[get_key(0, -nums[0]+total)] += 1
        for i in range(1, len(nums)):
            for j in range(-total, total+1):
                if dp[get_key(i-1, j+total)] > 0:
                    dp[get_key(i, j+nums[i]+total)] += dp[get_key(i-1, j+total)]
                    dp[get_key(i, j-nums[i]+total)] += dp[get_key(i-1, j+total)]
        return 0 if abs(target) > total else dp[get_key(len(nums)-1, target+total)]
        
        #
        
        @lru_cache(None)
        def backtrack(i: int, cur: int) -> int:
            nonlocal nums, target
            if i >= len(nums):
                return 1 if cur == target else 0
            return backtrack(i+1, cur+nums[i]) + backtrack(i+1, cur-nums[i])
        
        return backtrack(0, 0)
            