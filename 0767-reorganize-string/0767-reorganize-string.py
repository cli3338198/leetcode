class Solution:
    def reorganizeString(self, s: str) -> str:
        freq, q, res = Counter(s), [], ""
        for c, cnt in freq.items():
            heapq.heappush(q, [-cnt, c])
        while len(q) > 1:
            a = heapq.heappop(q)
            b = heapq.heappop(q)
            if not res or res[-1] != a[1]:
                res += a[1]
                a[0] += 1
            else:
                res += b[1]
                b[0] += 1
            if a[0] < 0:
                heapq.heappush(q, a)
            if b[0] < 0:
                heapq.heappush(q, b)
        if q and q[0][0] < -1:
            return ""
        if q:
            return res + q[0][1]
        return res