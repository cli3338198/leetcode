class Solution:
    def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:
        mp = {}
        res = 0
        for i in nums1:
            for j in nums2:
                mp[-(i+j)] = mp.get(-(i+j), 0) + 1
        for k in nums3:
            for l in nums4:
                res += mp.get(k+l, 0)
        return res