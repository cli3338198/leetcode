class Solution:
    def minimumSum(self, num: int) -> int:
        
        def get_num(num: int) -> List[int]:
            res = []
            while num != 0:
                res.append(num % 10)
                num //= 10
            return res
        
        a, b, c, d = sorted(get_num(num))
        return int(str(a) + str(c)) + int(str(b) + str(d))