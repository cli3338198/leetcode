class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        
        graph = {}
        
        for i in range(numCourses):
            graph[i] = []
            
        for u, v in prerequisites:
            graph[u].append(v)
            
        def dfs(u: int, v: int, set_: set) -> bool:
            if u == v:
                return True
        
            if u in set_:
                return False
            
            set_.add(u)
            
            for next_ in graph[u]:
                if dfs(next_, v, set_):
                    return True
            
            return False
        
        return [dfs(u, v, set()) for u, v in queries]