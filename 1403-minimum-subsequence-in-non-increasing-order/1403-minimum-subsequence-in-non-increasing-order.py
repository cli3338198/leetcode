class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums, res, cur_sum, sm = list(map(lambda x: -x, nums)), [], 0, sum(nums)
        heapq.heapify(nums)
        while cur_sum <= sm:
            n = heapq.heappop(nums)
            cur_sum += abs(n)
            sm -= abs(n)
            res.append(abs(n))
        return res