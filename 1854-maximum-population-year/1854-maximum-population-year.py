class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        years = [0] * 2051
        for birth, death in logs:
            years[birth] += 1
            years[death] -= 1
        cur_pop = max_pop = year = 0
        for yr in range(1950, 2051):
            cur_pop += years[yr]
            if cur_pop > max_pop:
                max_pop = cur_pop
                year = yr
        return year
            