class Solution:
    def __init__(self):
        self.visited = 0
        self.graph = defaultdict(list)
        
    def dfs(self, root: int, restricted: set) -> None:
        self.visited += 1
        for next in self.graph[root]:
            if next not in restricted:
                restricted.add(next)
                self.dfs(next, restricted)
    
    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:
        if len(restricted) == 0:
            return n
        if 0 in restricted:
            return 0
        for u, v in edges:
            self.graph[u].append(v)
            self.graph[v].append(u)
        restricted = set(restricted)
        restricted.add(0)
        self.dfs(0, restricted)
        return self.visited