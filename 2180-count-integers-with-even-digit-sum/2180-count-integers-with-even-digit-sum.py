class Solution:
    def countEven(self, num: int) -> int:
        cnt = 0
        for i in range(1, num+1):
            n, cur_sum = i, 0
            while n != 0:
                cur_sum += n % 10
                n //= 10
            if cur_sum % 2 == 0:
                cnt += 1
        return cnt