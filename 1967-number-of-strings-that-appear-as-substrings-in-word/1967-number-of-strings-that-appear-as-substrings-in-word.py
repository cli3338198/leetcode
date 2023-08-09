class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        return sum(map(lambda sub: 1 if sub in word else 0, patterns))