class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        res = 0
        jewels = set(jewels)
        for stone in stones:
            if stone in jewels: res += 1
        return res