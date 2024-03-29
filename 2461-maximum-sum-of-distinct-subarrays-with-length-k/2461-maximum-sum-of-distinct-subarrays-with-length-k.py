class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        seen, l, cur_sum, ans = set(), 0, 0, 0
        for r, n in enumerate(nums):
            while n in seen or r-l+1 > k:
                seen.remove(nums[l])
                cur_sum -= nums[l]
                l += 1
            cur_sum += n
            seen.add(n)
            if r-l+1 == k:
                ans = max(ans, cur_sum)            
        return ans
        
        #
        
        l, ans, cur_sum, mp = 0, 0, 0, {}
        for r in range(0, len(nums)):
            if nums[r] not in mp:
                mp[nums[r]] = 0
            mp[nums[r]] += 1
            cur_sum += nums[r]
            while mp[nums[r]] > 1 or r - l + 1 > k:
                mp[nums[l]] -= 1
                cur_sum -= nums[l]
                l += 1
            if r - l + 1 == k:
                ans = max(ans, cur_sum)
        return ans