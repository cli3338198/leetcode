class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        res = 0
        piles.sort(key=lambda x: x, reverse=True)
        for i in range(1, len(piles) * 2 // 3, 2):
            res += piles[i]
        return res