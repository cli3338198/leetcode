class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        mp = {}
        for n in nums:
            mp[n] = mp.get(n, 0) + 1
        sm = 0
        for k in mp:
            if mp[k] == 1:
                sm += int(k)
        return sm