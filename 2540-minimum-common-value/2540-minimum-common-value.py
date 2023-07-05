class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        for n in nums1:
            l = 0
            r = len(nums2)-1
            while l <= r:
                m = (l+r) // 2
                if nums2[m] == n:
                    return n
                elif nums2[m] < n:
                    l = m + 1
                else:
                    r = m - 1
        return -1