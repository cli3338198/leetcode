class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        m1 = m2 = m3 = float("-inf")
        for n in nums:
            if n > m1:
                m3, m2, m1 = m2, m1, n
            elif n > m2 and n != m1:
                m3, m2 = m2, n
            elif n > m3 and n != m1 and n != m2:
                m3 = n
        if m3 != float('-inf'):
            return m3
        else:
            return m1