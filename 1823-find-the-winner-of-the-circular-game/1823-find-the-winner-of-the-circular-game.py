class Solution:
    def findTheWinner(self, n: int, k: int) -> int:  
        # ???
        
        def go(n: int, k: int) -> int:
            if n == 1:
                return 0
            return (go(n-1, k) + k) % n
        
        return go(n, k) + 1
        
        #
        
        q = deque([n for n in range(1, n+1)])
        while len(q) > 1:
            for i in range(1, k):
                q.append(q.popleft())
            q.popleft()
        return q[0]
        