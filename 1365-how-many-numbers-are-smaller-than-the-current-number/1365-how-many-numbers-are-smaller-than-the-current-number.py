class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        cnts = [0] * 101
        for n in nums:
            cnts[n] += 1
        for i in range(1, 101):
            cnts[i] += cnts[i-1]
        return map(lambda x: cnts[x-1] if x != 0 else 0, nums)