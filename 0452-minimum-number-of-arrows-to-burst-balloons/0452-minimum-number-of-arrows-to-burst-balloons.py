class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: x[1])
        popped_up_to, res = float("-inf"), 0
        for w0, w1 in points:
            if w0 > popped_up_to:
                popped_up_to = w1
                res += 1
        return res