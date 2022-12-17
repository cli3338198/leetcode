class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        
        def two_sum(nums, target):
            res = []
            l, r = 0, len(nums)-1
            while l < r:
                sum = nums[l] + nums[r]
                if sum < target or (l > 0 and nums[l] == nums[l-1]):
                    l += 1
                elif sum > target or (r < len(nums)-1 and nums[r] == nums[r+1]):
                    r -= 1
                else:
                    res.append([nums[l], nums[r]])
                    l += 1
                    r -= 1
            return res
        
        def k_sum(k, nums, target):
            if k == 2: return two_sum(nums, target)
            res = []
            for i in range(len(nums)):
                if i > 0 and nums[i] == nums[i-1]: continue
                for k_list in k_sum(k-1, nums[i+1::], target-nums[i]):
                    res.append([nums[i], *k_list])
            return res
            
        return k_sum(3, nums, 0)