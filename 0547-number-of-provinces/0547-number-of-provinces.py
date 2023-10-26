class UF:
    def __init__(self):
        self.root = {}
        self.provinces = 0
    
    def insert(self, city: int) -> None:
        if city not in self.root:
            self.root[city] = city
            self.provinces += 1
    
    def find(self, city: int) -> int:
        if self.root[city] != city:
            self.root[city] = self.find(self.root[city])
        return self.root[city]
    
    def union(self, i: int, j: int) -> None:
        a, b = self.find(i), self.find(j)
        if a != b:
            self.root[b] = a
            self.provinces -= 1

class Solution:
    def bfs(self, isConnected: List[List[int]], city: int, visited: set) -> None:
        q = deque([city])
        while q:
            cur_city = q.popleft()
            if cur_city in visited:
                continue
            visited.add(cur_city)
            for next_city, yes in enumerate(isConnected[cur_city]):
                if yes == 1:
                    q.append(next_city)
    
    def dfs(self, isConnected: List[List[int]], city: int, visited: set) -> None:
        if city in visited:
            return
        visited.add(city)
        for next_city, yes in enumerate(isConnected[city]):
            if yes == 1:
                self.dfs(isConnected, next_city, visited)
    
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        uf = UF()
        for i in range(0, len(isConnected)):
            uf.insert(i)
            for j in range(0, len(isConnected[i])):
                uf.insert(j)
                if isConnected[i][j] == 1:
                    uf.union(i, j)
        return uf.provinces
        
        #
        
        n, visited, provinces = len(isConnected), set(), 0
        for city in range(0, n):
            if city not in visited:
                provinces += 1
                self.bfs(isConnected, city, visited)
        return provinces
        
        # 
        
        n, visited, provinces = len(isConnected), set(), 0
        for city in range(0, n):
            if city not in visited:
                provinces += 1
                self.dfs(isConnected, city, visited)
        return provinces
        