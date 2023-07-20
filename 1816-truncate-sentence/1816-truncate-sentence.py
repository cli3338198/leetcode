class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        return " ".join(s.split()[:k:])
        return " ".join([word for i, word in enumerate(s.split()) if i < k])