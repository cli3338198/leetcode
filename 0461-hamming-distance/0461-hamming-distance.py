class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        xor = x ^ y
        res = 0
        while xor:
            xor = xor & (xor - 1)
            res += 1
        return res