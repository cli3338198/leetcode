class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        points = [0] * 102
        for start, end in nums:
            points[start] += 1
            points[end + 1] -= 1
        cur = res = 0
        for i in range(1, 101):
            cur += points[i]
            if cur > 0:
                res += 1
        return res