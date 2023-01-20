class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        
        nums.sort()
        res = set()
        res.add(tuple())
        
        for n in nums:
            cur_subset = set()
            
            for sub in res:
                cur_subset.add(tuple(list(sub) + [n]))
            
            res.update(cur_subset)
        
        return [list(a) for a in res]