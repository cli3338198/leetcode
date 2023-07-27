class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        dp = [[] for _ in range(0, n+1)]
        dp[0].append("")
        for i in range(1, n+1):
            for j in range(0, i):
                for sub1 in dp[i-j-1]:
                    for sub2 in dp[j]:
                        dp[i].append(sub1 + "(" + sub2 + ")")
        return dp[n]
        
        q = deque([[0, 0, ""]])
        for _ in range(0, 2 * n):
            length = len(q)
            for _ in range(0, length):
                left, right, cur = q.popleft()
                if left < n:
                    q.append([left + 1, right, cur + "("])
                if left > right:
                    q.append([left, right + 1, cur + ")"])
        return map(lambda x: x[2], q)
        
        res = []
        
        def helper(left: int, right: int, cur: str) -> None:
            if left == right == n:
                res.append(cur)
                return
            if left < n:
                helper(left + 1, right, cur + "(")
            if left > right:
                helper(left, right + 1, cur + ")")
        
        helper(0, 0, "")
        return res