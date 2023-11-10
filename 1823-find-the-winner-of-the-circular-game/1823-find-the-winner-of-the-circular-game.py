class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        q = deque([n for n in range(1, n+1)])
        while len(q) > 1:
            for i in range(1, k):
                q.append(q.popleft())
            q.popleft()
        return q[0]
        