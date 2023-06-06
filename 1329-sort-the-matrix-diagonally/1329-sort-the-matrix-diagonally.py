class Heap:
    def __init__(self, fn):
        self.h = []
        self.fn = fn
    
    def push(self, n: int):
        self.h += [n]
        self.bubble_up(len(self.h)-1)
        
    def pop(self) -> int:
        if len(self.h) > 1:
            t = self.h[0]
            self.h[0] = self.h.pop()
            self.heapify(0)
            return t
        else:
            return self.h.pop()
    
    def heapify(self, p: int):
        l = 2 * p + 1
        r = 2 * p + 2
        while (l < len(self.h) and self.fn(self.h[p], self.h[l])) or (r < len(self.h) and self.fn(self.h[p], self.h[r])):
            t = p
            if l < len(self.h) and self.fn(self.h[t], self.h[l]):
                t = l
            if r < len(self.h) and self.fn(self.h[t], self.h[r]):
                t = r
            if t != p:
                self.swap(t, p)
                p = t
                l = 2 * p + 1
                r = 2 * p + 2
    
    def bubble_up(self, c: int):
        p = ceil(c / 2) - 1
        while p >= 0 and self.fn(self.h[p], self.h[c]):
            self.swap(p, c)
            c = p
            p = ceil(c / 2) - 1
            
    def swap(self, a: int, b: int):
        self.h[a], self.h[b] = self.h[b], self.h[a]

class Solution:
    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:
        def fn(a: int, b: int) -> bool:
            return a > b
        
        mp = dict()
        for r in range(0, len(mat)):
            for c in range(0, len(mat[r])):
                d = r - c
                if not d in mp:
                    mp[d] = Heap(fn)
                mp[d].push(mat[r][c])
        for r in range(0, len(mat)):
            for c in range(0, len(mat[r])):
                d = r - c
                mat[r][c] = mp[d].pop()
        return mat
        