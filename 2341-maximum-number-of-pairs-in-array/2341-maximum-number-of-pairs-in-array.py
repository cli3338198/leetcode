class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        arr = [0] * 101
        res = [0, 0]
        for n in nums:
            if arr[n] != 0:
                arr[n] = 0
                res[0] += 1
                res[1] -= 1
            else:
                arr[n] = 1
                res[1] += 1
        return res