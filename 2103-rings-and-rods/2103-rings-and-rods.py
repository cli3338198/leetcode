class Solution:
    def countPoints(self, rings: str) -> int:
        rngs = []
        for i in range(0, 10):
            rngs.append(set())
        for i in range(0, len(rings), 2):
            color, ring = rings[i], int(rings[i+1])
            rngs[ring].add(color)
        return sum([1 for r in rngs if len(r) == 3])