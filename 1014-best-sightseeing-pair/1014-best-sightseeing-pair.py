class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
        mx, pair_1 = 0, values[0]
        for i in range(1, len(values)):
            pair_2 = values[i] - i
            pair_value = pair_1 + pair_2
            mx = max(mx, pair_value)
            pair_1 = max(pair_1, values[i] + i)
        return mx