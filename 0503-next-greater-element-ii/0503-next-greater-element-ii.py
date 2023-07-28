class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        stack, mp, ans = [], {}, []
        nums = [*nums, *nums]
        for i, n in enumerate(nums):
            while stack and n > nums[stack[-1]]:
                mp[stack.pop()] = i
            stack.append(i)
        for i in range(0, len(nums) // 2):
            ans += [nums[mp[i]] if i in mp else -1]
        return ans