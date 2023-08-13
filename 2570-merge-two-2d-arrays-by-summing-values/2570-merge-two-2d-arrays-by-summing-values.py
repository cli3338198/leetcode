class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        i = j = 0
        ans = []
        while i < len(nums1) and j < len(nums2):
            i1, n1 = nums1[i]
            i2, n2 = nums2[j]
            if i1 == i2:
                ans.append([i1, n1 + n2])
                i += 1
                j += 1
            elif i1 < i2:
                ans.append([i1, n1])
                i += 1
            else:
                ans.append([i2, n2])
                j += 1
        while i < len(nums1):
            ans.append(nums1[i])
            i += 1
        while j < len(nums2):
            ans.append(nums2[j])
            j += 1
        return ans
        
        res = [[i, 0] for i in range(0, 1001)]
        for i, n in nums1:
            res[i][1] += n
        for i, n in nums2:
            res[i][1] += n
        return filter(lambda x: x[1] >= 1, res)