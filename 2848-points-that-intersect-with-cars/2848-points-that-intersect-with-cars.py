class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        nums.sort(key=lambda x: x[0])
        points = last = 0
        for start, end in nums:
            if end <= last:
                continue
            points += (end - max(last + 1, start) + 1)
            last = end
        return points
        
        #
        
        nums.sort(key=lambda x: x[0])
        arr = []
        for start, end in nums:
            if arr and arr[-1][1] >= start:
                arr[-1][1] = max(arr[-1][1], end)
            else:
                arr.append([start, end])
        points = 0
        for start, end in arr:
            points += end - start + 1
        return points
        
        #
        
        points = [0] * (100 + 1)
        for start, end in nums:
            for i in range(start, end + 1):
                points[i] = 1
        return sum(points)