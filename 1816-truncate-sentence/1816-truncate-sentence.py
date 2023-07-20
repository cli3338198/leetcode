class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        return " ".join([word for i, word in enumerate(s.split()) if i < k])