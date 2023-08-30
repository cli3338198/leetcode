class Solution:
    def findBestValue(self, arr: List[int], target: int) -> int:
        def find_diff(num: int) -> int:
            nonlocal arr
            nonlocal target
            sm = 0
            for n in arr:
                sm += min(n, num)
            return abs(sm - target)
        
        l, r = 0, target
        while l < r:
            m = (l+r)//2
            if find_diff(m) <= find_diff(m+1):
                r = m
            else:
                l = m + 1
        return l