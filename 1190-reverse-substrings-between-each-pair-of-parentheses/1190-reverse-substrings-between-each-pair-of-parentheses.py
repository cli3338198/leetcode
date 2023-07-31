class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        for c in s:
            if c == ")":
                reverse = []
                while stack[-1] != "(":
                    reverse.append(stack.pop())
                stack.pop()
                stack += reverse
            else:
                stack.append(c)
        return "".join(stack)