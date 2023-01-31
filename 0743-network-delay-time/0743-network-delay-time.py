class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = {}
        for u, v, t in times:
            graph[u] = graph.get(u, []) + [[v, t]]
            
        heap = [(0, k)]
        distances = {}
        
        while heap:
            cur_time, node = heapq.heappop(heap)
            
            if node not in distances or cur_time < distances[node]:
                distances[node] = cur_time
                
                if node in graph:
                    for next, node_to_next_time in graph[node]:
                        heapq.heappush(heap, [node_to_next_time + cur_time, next])
        
        if len(distances) != n:
            return -1
        
        return max(distances.values())
        
        
        
        