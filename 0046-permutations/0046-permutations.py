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
            for previous_permutation in dp[i-1]:
                length = len(previous_permutation)
                for k in range(0, length+1):
                    dp[i].append(previous_permutation[0:k:] + [nums[i-1]] + previous_permutation[k::])
        return dp[n]