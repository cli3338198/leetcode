class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        cnt = Counter(moves)
        return abs(cnt.get("L", 0) - cnt.get("R", 0)) + cnt.get("_", 0)