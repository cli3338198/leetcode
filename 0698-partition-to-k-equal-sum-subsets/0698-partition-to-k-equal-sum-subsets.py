class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        
        n = len(nums)
        total_sum = sum(nums)
        target = total_sum / k
        dp = {}
        
        if total_sum % k != 0:
            return False
        
        def helper(used: List[int], k: int, cur_sum: int) -> bool:
            
            key = f"""{" ".join(str(s) for s in used)} {k} {cur_sum}"""
            
            if key in dp:
                return dp[key]
            
            if k == 0:
                return sum(used) == n
        
            if cur_sum == 0:
                return helper(used, k-1, target)
            
            for i in range(n):
                if used[i] == 0 and nums[i] <= cur_sum:
                    used[i] = 1
                    if helper(used, k, cur_sum - nums[i]):
                        return True
                    used[i] = 0
            
            dp[key] = False
            return dp[key]
        
        return helper([0] * n, k, target)
            
            