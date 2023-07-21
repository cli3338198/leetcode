class Solution:
    def __init__(self):
        self.res = []
        self.set = set()
    
    def helper(self, n: int, i: int, k: int, list: List[int]) -> None:
        if k == 0:
            self.res.append([x for x in list])
            return
        for j in range(i, n+1):
            if j not in self.set:
                self.set.add(j)
                list.append(j)
                self.helper(n, j+1, k-1, list)
                self.set.remove(j)
                list.pop()
    
    def combine(self, n: int, k: int) -> List[List[int]]:
        self.helper(n, 1, k, [])
        return self.res