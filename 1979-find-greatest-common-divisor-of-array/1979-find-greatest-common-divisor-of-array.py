class Solution:
    def findGCD(self, nums: List[int]) -> int:
        mn = float('inf')
        mx = float('-inf')
        for num in nums:
            mn = min(mn, num)
            mx = max(mx, num)
        res = 1
        for i in range(1, mx+1):
            if mn % i == 0 and mx % i == 0:
                res = max(res, i)
        return res