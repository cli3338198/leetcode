class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        n, cnt = len(s), 0
        dp = [False] * n
        dp[0] = True
        for i in range(1, n):
            if i >= minJump and i - minJump >= 0 and dp[i - minJump] == True:
                cnt += 1
            if i > maxJump and i - maxJump - 1 >= 0 and dp[i - maxJump - 1] == True:
                cnt -= 1
            if cnt > 0 and s[i] == '0':
                dp[i] = True
        return dp[-1]