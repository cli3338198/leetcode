class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        mp, res = {}, 0
        for n in nums:
            pos = n + k
            neg = n - k
            if pos in mp:
                res += mp[pos]
            if neg in mp:
                res += mp[neg]
            mp[n] = mp.get(n, 0) + 1
        return res