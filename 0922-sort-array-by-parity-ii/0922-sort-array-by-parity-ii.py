class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        i, j = 0, 1
        while i < len(nums) and j < len(nums):
            while i < len(nums) and nums[i] % 2 == 0:
                i += 2
            while j < len(nums) and nums[j] % 2 != 0:
                j += 2
            if i < len(nums) and j < len(nums):
                nums[i], nums[j] = nums[j], nums[i]
        return nums
        
        #
        
        odds, evens = [], []
        for n in nums:
            if n % 2 == 0:
                evens.append(n)
            else:
                odds.append(n)
        i, j, ans = 0, 0, []
        while i < len(odds) or j < len(odds):
            ans += [evens[j]] + [odds[i]]
            i += 1
            j += 1
        while i < len(odds):
            ans += [odds[i]]
            i += 1
        while j < len(evens):
            ans += [evens[j]]
            j += 1
        return ans
                