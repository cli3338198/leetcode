class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        events = []
        for passengers, start, end in trips:
            events.append((start, passengers))
            events.append((end, -passengers))
        for _, change in sorted(events):
            capacity -= change
            if capacity < 0:
                return False
        return True