class Solution:
    def reverseVowels(self, s: str) -> str:
        stack = []
        for c in s:
            if c in 'aeiouAEIOU':
                stack.append(c)
        return "".join([stack.pop() if c in 'aeiouAEIOU' else c for c in s])
        
        #
        
        s = [c for c in s]
        l, r = 0, len(s)-1
        while l < r:
            if s[l] not in 'aeiouAEIOU':
                l += 1
            elif s[r] not in 'aeiouAEIOU':
                r -= 1
            else:
                s[l], s[r] = s[r], s[l]
                l += 1
                r -= 1
        return "".join(s)