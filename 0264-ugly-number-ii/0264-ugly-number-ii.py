class Solution:
    def nthUglyNumber(self, n: int) -> int:
        h, seen, res = [1], set(), []
        seen.add(1)
        while h and n:
            num = heapq.heappop(h)
            res.append(num)
            for x in [2, 3, 5]:
                if num * x not in seen:
                    seen.add(num * x)
                    heapq.heappush(h, num * x)
            n -= 1
        return res[-1]