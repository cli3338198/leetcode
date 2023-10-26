class Solution:
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
                self.dfs(isConnected, city, visited)
        return provinces
        