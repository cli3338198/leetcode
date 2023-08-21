class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        arr = [0] * 52
        for lo, hi in ranges:
            arr[lo] += 1
            arr[hi+1] -= 1
        overlaps = 0
        for i in range(1, right+1):
            overlaps += arr[i]
            if i >= left and overlaps == 0:
                return False
        return True