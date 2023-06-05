class Solution:
    def alternateDigitSum(self, n: int) -> int:
        res, s, sign = 0, str(n), 1
        for i in s:
            res += sign * int(i)
            sign *= -1
        return res