class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        i, stack = 0, []
        for p in pushed:
            stack.append(p)
            while stack and i < len(popped) and stack[-1] == popped[i]:
                stack.pop()
                i += 1
        return i == len(popped)