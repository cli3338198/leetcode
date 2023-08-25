class Solution:
    def splitNum(self, num: int) -> int:
        nums, num1, num2 = [], 0, 0
        while num:
            nums.append(num % 10)
            num //= 10
        nums.sort()
        for i, n in enumerate(nums):
            if i % 2 != 0:
                num1 = num1 * 10 + n
            else:
                num2 = num2 * 10 + n
        return num1 + num2