class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        arr, res = [0] * 1001, []
        for row in nums:
            for n in row:
                arr[n] += 1
        for i, cnt in enumerate(arr):
            if cnt == len(nums):
                res.append(i)
        return res