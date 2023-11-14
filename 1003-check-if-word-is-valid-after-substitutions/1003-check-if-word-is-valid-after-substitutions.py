class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            if len(stack) >= 2 and stack[-2] == 'a' and stack[-1] == 'b' and c == 'c':
                stack.pop()
                stack.pop()
            else:
                stack.append(c)
        return not stack