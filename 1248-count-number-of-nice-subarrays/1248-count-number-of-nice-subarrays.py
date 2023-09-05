class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        l = res = cnt = 0
        for r in range(0, len(nums)):
            if nums[r] % 2 != 0:
                k -= 1
                cnt = 0
            while k == 0:
                if nums[l] % 2 != 0:
                    k += 1
                l += 1
                cnt += 1
            res += cnt
        return res