class Solution:
    def reverse(self, x: int) -> int:
        is_negative = True if x < 0 else False
        if x < 0:
            x *= -1
        res = 0
        while x:
            res *= 10
            res += x % 10
            x //= 10
        if res > 2 ** 31 - 1 or res < -2 ** 31:
            return 0
        return res * (-1 if is_negative else 1)