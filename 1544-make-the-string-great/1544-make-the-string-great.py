class Solution:
    def makeGood(self, s: str) -> str:
        stack = []
        for char in s:
            stack.append(char)
            if len(stack) >= 2:
                if stack[-1].upper() in stack[-2::] and stack[-1].lower() in stack[-2::]:
                    stack.pop()
                    stack.pop()
        return "".join(stack)