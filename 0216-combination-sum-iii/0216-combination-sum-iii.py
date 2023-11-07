class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
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