class UF:
    def __init__(self):
        self.root = {}
    
    def add(self, char: str) -> None:
        if char not in self.root:
            self.root[char] = char
    
    def find(self, char: str) -> str:
        self.add(char)
        if self.root[char] != char:
            self.root[char] = self.find(self.root[char])
        return self.root[char]
    
    def union(self, char_a: str, char_b: str) -> None:
        root_a, root_b = self.find(char_a), self.find(char_b)
        if root_a != root_b:
            if root_a < root_b:
                self.root[root_b] = root_a
            else:
                self.root[root_a] = root_b

class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        uf = UF()
        for i in range(0, len(s1)):
            uf.union(s1[i], s2[i])
        return "".join(map(lambda c: uf.find(c), [char for char in baseStr]))