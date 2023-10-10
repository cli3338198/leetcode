class Solution:    
    def bfs(self, heights: List[List[int]], q: List[List[int]], ocean: set) -> None:
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        while q:
            r, c = q.popleft()
            ocean.add(f"{r} {c}")
            for dr, dc in dirs:
                rr, cc = r + dr, c + dc
                if rr >= 0 and rr < len(heights) and cc >= 0 and cc < len(heights[0]) and heights[rr][cc] >= heights[r][c] and f"{rr} {cc}" not in ocean:
                    q.append([rr, cc])
    
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        pac, atl = set(), set()
        q = deque([])
        for r in range(0, m):
            for c in range(0, n):
                if r == 0 or c == 0:
                    q.append([r, c])
        self.bfs(heights, q, pac)
        for r in range(0, m):
            for c in range(0, n):
                if r == m-1 or c == n-1:
                    q.append([r, c])
        self.bfs(heights, q, atl)
        return [map(int, x.split(" ")) for x in pac & atl]