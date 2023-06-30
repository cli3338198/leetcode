class Solution:
    def twoSum(self, nums: List[int], i: int, target: int) -> List[int]:
        l, r, res = i, len(nums)-1, []
        while l < r:
            cur_sum = nums[l] + nums[r]
            if cur_sum > target:
                r -= 1
            elif cur_sum < target:
                l += 1
            else:
                res.append([nums[l], nums[r]])
                l += 1
                r -= 1
                while l > i and l < len(nums)-1 and nums[l] == nums[l-1]:
                    l += 1
                while r < len(nums)-1 and r > l and nums[r] == nums[r+1]:
                    r -= 1
        return res
    
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        return self.kSum(nums, 4, 0, target)
        
    def kSum(self, nums: List[int], k: int, i: int, target: int) -> List[int]:
        if k == 2:
            return self.twoSum(nums, i, target)
        res = []
        for j in range(i, len(nums)):
            if j > i and nums[j] == nums[j-1]:
                continue
            for kMinusOneList in self.kSum(nums, k-1, j+1, target-nums[j]):
                res.append([nums[j], *kMinusOneList])
        return res
                