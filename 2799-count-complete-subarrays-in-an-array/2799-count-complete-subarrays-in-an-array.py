class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        mp, l, res, size = {}, 0, 0, len(set(nums))
        for r, c in enumerate(nums):
            mp[c] = mp.get(c, 0) + 1
            if mp[c] == 1:
                size -= 1
            while size == 0:
                mp[nums[l]] -= 1
                if mp[nums[l]] == 0:
                    size += 1
                l += 1
            res += l
        return res