class Solution:
    def maxDepth(self, s: str) -> int:
        stack, res = [], 0
        for c in s:
            if c == "(":
                if stack:
                    stack.append(stack[-1] + 1)
                else:
                    stack.append(1)
            elif c == ")":
                res = max(res, stack.pop())
        return res