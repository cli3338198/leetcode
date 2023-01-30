class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        
        q = deque()
        q.append([0, 0, ''])
        
        for i in range(2 * n):
            l = len(q)
            
            for j in range(l):
                left, right, cur = q.popleft()
                
                if left < n:
                    q.append([left + 1, right, cur + "("])
                
                if right < left:
                    q.append([left, right + 1, cur + ")"])
        
        return map(lambda x: x[2], q)