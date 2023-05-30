class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = "aeiouAEIOU"
        return sum([1 for c in s[:len(s)//2:] if c in vowels]) == sum([1 for c in s[len(s)//2::] if c in vowels])