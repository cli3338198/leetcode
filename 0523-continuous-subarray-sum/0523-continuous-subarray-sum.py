class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        mp, cursum = {0: 0}, 0
        for i in range(0, len(nums)):
            cursum += nums[i]
            if cursum % k not in mp:
                mp[cursum % k] = i + 1
            elif mp[cursum % k] < i:
                return True
        return False
                