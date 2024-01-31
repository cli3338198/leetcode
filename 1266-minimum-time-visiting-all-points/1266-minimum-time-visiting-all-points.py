class Solution:
    def distance(self, p1: List[int], p2: List[int]) -> int:
        x0, y0, x1, y1 = p1 + p2
        return min(abs(y1 - y0), abs(x1 - x0)) + max(abs(y1 - y0), abs(x1 - x0)) - min(abs(y1 - y0), abs(x1 - x0))
    
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        # Chebyshev Distance
        res = 0
        for i in range(1, len(points)):
            res += max(abs(points[i][0] - points[i-1][0]), abs(points[i][1] - points[i-1][1]))
        return res
        
        #
        
        ans = 0
        for i in range(1, len(points)):
            ans += self.distance(points[i-1], points[i])
        return ans