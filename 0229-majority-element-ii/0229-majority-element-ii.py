class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        n, cnt, res = len(nums), {}, []
        for num in nums:
            cnt[num] = cnt.get(num, 0) + 1
            if cnt[num] > n / 3 and num not in res:
                res.append(num)
        return res