class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x < 10:
            return True
        if x % 10 == 0:
            return False
        y, z = x, 0
        while y:
            z, y = z * 10 + y % 10, y // 10
        return z == x