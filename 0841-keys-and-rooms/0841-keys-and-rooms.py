class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        n = len(rooms)
        visited = [0] * n
        q = deque([0])
        while q:
            room = q.popleft()
            visited[room] = 1
            for next_room in rooms[room]:
                if visited[next_room] != 1:
                    q.append(next_room)
        return sum(visited) == n