class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        dp = [[[] for _ in range(0, n+1)] for _ in range(0, 10)]
        for i in range(0, 10):
            dp[i][0].append([])
        for cur_num in range(1, 10):
            for cur_target in range(1, n+1):
                dp[cur_num][cur_target] += dp[cur_num-1][cur_target]
                if cur_num <= cur_target:
                    for sub in dp[cur_num-1][cur_target-cur_num]:
                        if len(sub) < k:
                            dp[cur_num][cur_target].append(sub + [cur_num])
        return [x for x in dp[-1][-1] if len(x) == k]
        
        #
        
        res = []
        
        def backtrack(i: int, cur_list: list[int], n: int) -> None:
            if n == 0 and len(cur_list) == k:
                res.append([x for x in cur_list])
                return
            if 9 >= i <= n:
                backtrack(i+1, cur_list + [i], n-i)
                backtrack(i+1, cur_list, n)
        
        backtrack(1, [], n)
        return res