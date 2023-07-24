class Solution:
    def minLength(self, s: str) -> int:
        stack = []
        for c in s:
            stack.append(c)
            if len(stack) >= 2:
                sub = stack[-2] + stack[-1]
                if sub in ["AB", "CD"]:
                    stack.pop()
                    stack.pop()
        return len(stack)