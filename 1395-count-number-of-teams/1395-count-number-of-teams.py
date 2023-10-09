class Solution:
    def numTeams(self, rating: List[int]) -> int:
        n = len(rating)
        up, down, res = [0] * n, [0] * n, 0
        for i in range(0, n):
            for j in range(0, i):
                if rating[j] < rating[i]:
                    up[i] += 1
                    res += up[j]
                else:
                    down[i] += 1
                    res += down[j]
        return res
                    
        
    