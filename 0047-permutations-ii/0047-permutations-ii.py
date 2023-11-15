class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        dp = [[[] for _ in range(0, n+1)] for _ in range(0, n+1)]
        for row in dp:
            row[0].append([])
        for row in range(1, n+1):
            for col in range(1, n+1):
                for sub in dp[row-1][col-1]:
                    l = 1 if len(sub) == 1 and sub[0] == nums[col-1] else len(sub)+1
                    for i in range(0, l):
                        dp[row][col].append(sub[0:i:] + [nums[col-1]] + sub[i::])
        return map(list, set(map(tuple, dp[-1][-1])))
        
        #
        
        nums.sort()
        
        def permute(nums: List[int]) -> List[List[int]]:
            if len(nums) == 1:
                return [nums]
            res = []
            for i in range(0, len(nums)):
                if i > 0 and nums[i] == nums[i-1]:
                    continue
                for sub in permute(nums[0:i:] + nums[i+1::]):
                    res.append([nums[i], *sub])
            return res
        
        return permute(nums)