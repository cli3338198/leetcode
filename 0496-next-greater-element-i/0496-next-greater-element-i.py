class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res, mp, stack = [], {}, [-1]
        for n in nums2:
            while stack and n > stack[-1]:
                mp[stack.pop()] = n
            stack.append(n)
        for n in nums1:
            res.append(mp.get(n, -1))
        return res