class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        points = [0] * (100 + 1)
        for start, end in nums:
            for i in range(start, end + 1):
                points[i] = 1
        return sum(points)