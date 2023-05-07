class Solution:
    def maximum69Number (self, num: int) -> int:
        max_ = num
        num = str(num)
        for i in range(len(num)):
            cur = [c for c in num]
            cur[i] = '9'
            max_ = max(max_, int("".join(cur)))
        return max_