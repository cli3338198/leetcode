class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-stone for stone in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            stone1, stone2 = heapq.heappop(stones), heapq.heappop(stones)
            if stone1 == stone2:
                continue
            else:
                new_stone = min(stone1, stone2) + abs(max(stone1, stone2))
                heapq.heappush(stones, new_stone)
        return 0 if not stones else -stones[0]