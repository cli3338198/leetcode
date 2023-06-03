class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        cnt = [0] * 501
        for n in nums:
            cnt[n] += 1
        for n in cnt:
            if n % 2 != 0:
                return False
        return True