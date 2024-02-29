class Heap:
    def __init__(self, compare):
        self.h = []
        self.compare = self.build_compare(compare)
    
    def push(self, point):
        self.h.append(point)
        self.bubble_up(len(self.h) - 1)
        
    def bubble_up(self, c):
        p = (ceil(c / 2) // 1) - 1
        while p >= 0 and self.compare(p, c):
            self.swap(p, c)
            c = p
            p = (ceil(c / 2) // 1) - 1
            
    def pop(self):
        if len(self.h) > 1:
            t = self.h[0]
            self.h[0] = self.h.pop()
            self.heapify(0)
            return t
        return self.h.pop()
    
    def heapify(self, p):
        l, r = 2 * p + 1, 2 * p + 2
        while (l < len(self.h) and self.compare(p, l)) or (r < len(self.h) and self.compare(p, r)):
            t = p
            if l < len(self.h) and self.compare(t, l):
                t = l
            if r < len(self.h) and self.compare(t, r):
                t = r
            if t != p:
                self.swap(t, p)
                p = t
                l, r = 2 * p + 1, 2 * p + 2
                
    def swap(self, p, c):
        self.h[p], self.h[c] = self.h[c], self.h[p]
    
    def build_compare(self, compare):
        def fn(p, c):
            return compare(self.h[p], self.h[c])
        return fn

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        def euclid(point):
            x1, y1 = point
            return sqrt(pow(x1, 2) + pow(y1, 2))
        
        def compare(point1, point2):
            return euclid(point1) > euclid(point2)
        
        h = Heap(compare)
        for point in points:
            h.push(point)
        k_closest = []
        while k:
            k_closest.append(h.pop())
            k -= 1
        return k_closest
        
        
        