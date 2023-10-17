class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        in_degree, graph, q, count = {}, {}, deque([]), 0
        for n in range(0, numCourses):
            in_degree[n] = 0
            graph[n] = []
        for course, prereq in prerequisites:
            in_degree[course] += 1
            graph[prereq].append(course)
        for n in range(0, numCourses):
            if in_degree[n] == 0:
                q.append(n)
        while q:
            n = q.popleft()
            count += 1
            for next in graph[n]:
                in_degree[next] -= 1
                if in_degree[next] == 0:
                    q.append(next)
        return count == numCourses
            