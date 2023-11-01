class Solution:
    def isTwoEdits(self, a: str, b: str) -> bool:
        edits = 0
        for i in range(0, len(a)):
            if a[i] != b[i]:
                edits += 1
        return edits <= 2
    
    def twoEditWords(self, queries: List[str], dictionary: List[str]) -> List[str]:
        res = []
        for query in queries:
            for word in dictionary:
                if self.isTwoEdits(query, word):
                    res.append(query)
                    break
        return res