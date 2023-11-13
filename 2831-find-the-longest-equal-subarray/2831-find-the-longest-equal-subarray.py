class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        l, count, maxf = 0, defaultdict(int), 0
        for r, n in enumerate(nums):
            count[n] = count.get(n, 0) + 1
            maxf = max(maxf, count[n])
            if r-l+1-maxf > k:
                count[nums[l]] -= 1
                l += 1
        return maxf