class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        cur = cnt = 0
        mp = {}
        mp[0] = 1
        for n in nums:
            cur += n
            diff = cur - k
            if diff in mp:
                cnt += mp[diff]
            mp[cur] = mp.get(cur, 0) + 1
        return cnt