class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        n = len(s)
        res, last = [inf] * n, -1
        for i in range(0, n):
            if s[i] == c:
                res[i] = 0
                last = i
            elif last != -1:
                res[i] = i - last
        last = -1
        for i in range(n-1, -1, -1):
            if s[i] == c:
                res[i] = 0
                last = i
            elif last != inf:
                res[i] = min(res[i], abs(last - i))
        return res
        
        #
        
        n = len(s)
        res, stack = [inf] * n, []
        for i in range(0, n):
            if s[i] == c:
                res[i] = 0
                stack.append(i)
            elif stack:
                res[i] = abs(i - stack[-1])
        stack = []
        for i in range(n-1, -1, -1):
            if s[i] == c:
                res[i] = 0
                stack.append(i)
            elif stack:
                res[i] = min(res[i], abs(stack[-1] - i))
        return res
            
        