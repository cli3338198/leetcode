class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        q, max_reached = deque([0]), 0
        while q:
            i = q.popleft()
            if i == len(s)-1:
                return True
            for j in range(max(i+minJump, max_reached+1), min(i+maxJump+1, len(s))):
                if s[j] == '0':
                    q += [j]
            max_reached = i + maxJump
        return False
    
        #
        
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