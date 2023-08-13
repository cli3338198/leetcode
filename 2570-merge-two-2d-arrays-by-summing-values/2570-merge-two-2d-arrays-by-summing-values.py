class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        res = [[i, 0] for i in range(0, 1001)]
        for i, n in nums1:
            res[i][1] += n
        for i, n in nums2:
            res[i][1] += n
        return filter(lambda x: x[1] >= 1, res)