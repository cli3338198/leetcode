class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        events = []
        for birth, death in logs:
            events.append([birth, 1])
            events.append([death, -1])
        cur, res, min_year = 0, 0, 0
        for year, change in sorted(events):
            cur += change
            if cur > res:
                res = cur
                min_year = year
        return min_year
        