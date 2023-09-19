class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        mp, res = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}, deque([])
        
        if len(digits) == 0:
            return res
        res.append("")
        for i in range(0, len(digits)):
            length = len(res)
            for j in range(0, length):
                cur = res.popleft()
                for k in mp[str(digits[i])]:
                    res.append(cur + k)
        return list(res)
        
        # 
        
        def backtrack(idx: int, cur: str) -> None:
            nonlocal res, mp, digits
            if idx >= len(digits):
                res.append(cur)
                return
            for c in mp[str(digits[idx])]:
                backtrack(idx+1, cur+c)
        
        if len(digits) == 0:
            return res
        backtrack(0, "")
        return res