class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        
        def reverse(num: int) -> int:
            res = 0
            while num:
                digit = num % 10
                res *= 10
                res += digit
                num //= 10
            return res
        
        return reverse(reverse(num)) == num