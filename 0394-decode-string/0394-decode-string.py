class Solution:
    def decodeString(self, s: str) -> str:
        stack, i = [], 0
        for c in s:
            if c == "]":
                cur = ""
                while stack and stack[-1] != "[":
                    cur = stack.pop() + cur
                stack.pop()
                k = ""
                while stack and stack[-1].isnumeric():
                    k = stack.pop() + k
                stack.append("".join([cur for _ in range(0, int(k))]))
            else:
                stack.append(c)
        return "".join(stack)