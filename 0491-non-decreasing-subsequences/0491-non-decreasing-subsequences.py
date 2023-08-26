class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        cur, res = [float("-inf")], set()
        
        def backtrack(idx: int, used: List[bool]) -> None:
            nonlocal res
            if len(cur) >= 3:
                res.add(tuple(cur[1::]))
            for i in range(idx, len(nums)):
                if not used[i] and cur[-1] <= nums[i]:
                    used[i] = True
                    cur.append(nums[i])
                    backtrack(i+1, used)
                    cur.pop()
                    used[i] = False
        
        backtrack(0, [False] * len(nums))
        return res