class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        counter = {}
        for tile in tiles:
            if tile not in counter:
                counter[tile] = 0
            counter[tile] += 1
        
        def backtrack(res: List[int]) -> List[int]:
            for tile, cnt in counter.items():
                if cnt > 0:
                    counter[tile] -= 1
                    res[0] += 1
                    backtrack(res)
                    counter[tile] += 1
            return res
        
        return backtrack([0])[0]