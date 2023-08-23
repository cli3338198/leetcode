class Solution:
    def sortVowels(self, s: str) -> str:
        vowels = []
        for i, c in enumerate(s):
            if c in "aeiouAEIOU":
                vowels.append(c)
        vowels = deque(sorted(vowels))
        for i, c in enumerate(s):
            if c in 'aeiouAEIOU':
                s = s[0:i:] + vowels.popleft() + s[i+1::]
        return s