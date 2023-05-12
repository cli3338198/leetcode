class Solution:
    def countDigits(self, num: int) -> int:
        res = 0
        original = num
        while num != 0:
            res += 1 if original % (num % 10) == 0 else 0
            num = num // 10
        return res