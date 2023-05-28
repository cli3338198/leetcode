class Solution:
    def helper(self, n: int) -> bool:
        if n % 10 == 0:
            return False
        original = n
        while n:
            digit = n % 10
            if digit == 0 or original % digit != 0:
                return False
            n //= 10
        return True
    
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        res = []
        for i in range(left, right+1):
            if self.helper(i):
                res.append(i)
        return res