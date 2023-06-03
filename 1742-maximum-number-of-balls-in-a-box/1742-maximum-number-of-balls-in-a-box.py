class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        
        def get_no(n: int) -> int:
            res = 0
            while n != 0:
                res += n % 10
                n //= 10
            return res
        
        cnt, res = [0] * (highLimit+1), float("-inf")
        for i in range(lowLimit, highLimit+1):
            n = get_no(i)
            cnt[n] += 1
            res = max(res, cnt[n])
        return res
        