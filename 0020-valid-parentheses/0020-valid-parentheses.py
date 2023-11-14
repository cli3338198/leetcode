class Solution:
    def isValid(self, s: str) -> bool:
        stack, mp = [], {")": "(", "}": "{", "]": "["}
        for c in s:
            if stack and c in mp and stack[-1] == mp[c]:
                stack.pop()
            else:
                stack.append(c)
        return not stack