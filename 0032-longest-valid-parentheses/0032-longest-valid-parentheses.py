class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack, res = [-1], 0
        for i, c in enumerate(s):
            if c == "(":
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    res = max(res, i - stack[-1])
        return res
            