class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        ages = [[scores[i], ages[i]] for i in range(0, len(ages))]
        ages.sort()
        dp = [ages[i][0] for i in range(0, len(ages))]
        for i in range(1, len(ages)):
            maxScore, maxAge = ages[i]
            for j in range(0, i):
                curScore, curAge = ages[j]
                if maxAge >= curAge:
                    dp[i] = max(dp[i], maxScore + dp[j])       
        return max(dp)