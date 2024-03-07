class Solution:
    def reorganizeString(self, s: str) -> str:
        freq = Counter(s)
        max_heap = [[-cnt, char] for char, cnt in freq.items()]
        heapq.heapify(max_heap)
        res = ""
        prev = None
        while max_heap or prev:
            if not max_heap and prev:
                return ""
            cnt, char = heapq.heappop(max_heap)
            res += char
            cnt += 1
            if prev:
                heapq.heappush(max_heap, prev)
                prev = None
            if cnt < 0:
                prev = [cnt, char]
        return res
            