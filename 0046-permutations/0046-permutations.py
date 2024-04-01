class Solution:    
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        
        def backtrack(cur: List[int]) -> None:
            if len(cur) == len(nums):
                res.append([*cur])
                return
            for n in nums:
                if n not in cur:
                    cur.append(n)
                    backtrack(cur)
                    cur.pop()
            
        backtrack([])
        return res
        
        #
        
        dp = [[[nums[0]]]]
        for i in range(1, len(nums)):
            next = []
            for sub in dp[-1]:
                for j in range(0, len(sub) + 1):
                    next.append([*sub[0:j:], nums[i], *sub[j::]])
            dp.append(next)
        return dp[-1]
        
        #
        
        if not nums:
            return [[]]
        res = []
        for i in range(0, len(nums)):
            for sub in self.permute(nums[0:i:] + nums[i+1::]):
                res.append([nums[i]] + sub)
        return res