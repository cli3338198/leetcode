class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        map_ = {}
        for c in s:
            map_[c] = map_.get(c, 0) + 1
        for c in t:
            if c not in map_ or map_[c] == 0:
                return c
            map_[c] -= 1