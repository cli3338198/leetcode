class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        pos = 0
        neg = 0
        for n in nums:
            if n == 0: 
                continue
            if n > 0:
                pos += 1
            else:
                neg += 1
        return max(pos, neg)