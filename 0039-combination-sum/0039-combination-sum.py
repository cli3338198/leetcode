class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        
        def backtrack(idx: int, cur: List[int], target: int) -> None:
            nonlocal res, candidates
            if target == 0:
                res.append(cur)
                return
            else:
                for i in range(idx, len(candidates)):
                    if candidates[i] <= target:
                        backtrack(i, [*cur, candidates[i]], target-candidates[i])
        
        backtrack(0, [], target)
        return res