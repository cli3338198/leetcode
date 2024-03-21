class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        cuts = {}
        for row in wall:
            cur_len = 0
            for i, brick in enumerate(row):
                if i == len(row) - 1:
                    break
                cur_len += brick
                cuts[cur_len] = cuts.get(cur_len, 0) + 1
        return len(wall) - max(cuts.values()) if cuts else len(wall)