class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        n = len(nums)
        dp = [[] for _ in range(0, n+1)]
        dp[0].append([])
        for i in range(1, n+1):
            for j in dp[i-1]:
                l = len(j)
                for k in range(0, l+1):
                    dp[i].append(j[0:k:] + [nums[i-1]] + j[k::])
        return dp[n]