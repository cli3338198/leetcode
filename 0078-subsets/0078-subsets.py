class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        
        res = [[]]
        
        for n in nums:
            sub = []
            
            for r in res:
                sub.append([*r, n])
            
            res = res + sub
            
        return res