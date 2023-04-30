class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        
        res = []
        
        for i, n in enumerate(nums):
            if i == 0:
                res += [n]
            else:
                res += [n + res[-1]]
                
        return res