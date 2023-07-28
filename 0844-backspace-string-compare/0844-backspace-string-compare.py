class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def get_next(s: str, i: int) -> int:
            backspaces = 0
            while i >= 0:
                if s[i] == "#":
                    backspaces += 1
                elif backspaces > 0:
                    backspaces -= 1
                else:
                    break
                i -= 1
            return i
        
        i, j = len(s)-1, len(t)-1
        while i > -1 or j > -1:
            i1, j1 = get_next(s, i), get_next(t, j)
            if i1 < 0 and j1 < 0:
                return True
            if i1 < 0 or j1 < 0:
                return False
            if s[i1] != t[j1]:
                return False
            i, j = i1 - 1, j1 - 1
        return True
            
        
        def helper(s: str) -> str:
            stack = []
            for c in s:
                if c == "#":
                    if stack:
                        stack.pop()
                else:
                    stack.append(c)
            return "".join(stack)
        
        return helper(s) == helper(t)