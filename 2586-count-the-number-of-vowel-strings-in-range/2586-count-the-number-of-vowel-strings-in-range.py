class Solution:
    def __init__(self):
        self.vowels = "aeiou"
    
    def is_valid(self, word: str) -> bool:
        return word[0] in self.vowels and word[-1] in self.vowels
    
    def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        return sum([1 for word in words[left:right+1:] if word[0] in 'aeiou' and word[-1] in 'aeiou'])
    
        #
        
        res = 0
        for i in range(left, right+1):
            if self.is_valid(words[i]):
                res += 1
        return res