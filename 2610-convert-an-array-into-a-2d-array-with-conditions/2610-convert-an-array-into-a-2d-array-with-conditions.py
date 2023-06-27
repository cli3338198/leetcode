class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        res = []
        freq = {}
        for n in nums:
            freq[n] = freq.get(n, 0) + 1
        for i in range(0, max(freq.values())):
            subres = []
            for k in freq:
                if freq[k] > 0:
                    freq[k] -= 1
                    subres.append(k)
            res.append(subres)
        return res