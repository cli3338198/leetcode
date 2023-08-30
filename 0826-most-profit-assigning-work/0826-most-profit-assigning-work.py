class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        jobs = sorted(zip(difficulty, profit))
        total_profit = cur_best_profit = i = 0
        for max_ability in sorted(worker):
            while i < len(jobs) and max_ability >= jobs[i][0]:
                cur_best_profit = max(cur_best_profit, jobs[i][1])
                i += 1
            total_profit += cur_best_profit
        return total_profit
        