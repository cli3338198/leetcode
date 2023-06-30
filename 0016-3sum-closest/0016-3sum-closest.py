class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        diff, sum_ = float("inf"), None
        for i in range(0, len(nums)):
            l, r = i + 1, len(nums)-1
            while l < r:
                cur_sum = nums[i] + nums[l] + nums[r]
                cur_diff = abs(target - cur_sum)
                if cur_diff == 0:
                    return cur_sum
                elif cur_diff < diff:
                    diff = cur_diff
                    sum_ = cur_sum
                elif cur_sum > target:
                    r -= 1
                else:
                    l += 1
        return sum_