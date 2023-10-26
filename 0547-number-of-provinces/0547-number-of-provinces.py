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
        