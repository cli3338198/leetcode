class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        
        def helper(left: int, right: int, cur: str) -> None:
            if left == right == n:
                res.append(cur)
                return
            if left < n:
                helper(left + 1, right, cur + "(")
            if left > right:
                helper(left, right + 1, cur + ")")
        
        helper(0, 0, "")
        return res