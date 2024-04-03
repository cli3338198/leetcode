class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        h, visited, res = [], set(), []
        heapq.heappush(h, [nums1[0] + nums2[0], 0, 0])
        visited.add((0, 0))
        while len(res) < k and h:
            _, i, j = heapq.heappop(h)
            res.append([nums1[i], nums2[j]])
            if i + 1 < len(nums1) and (i + 1, j) not in visited:
                visited.add((i + 1, j))
                heapq.heappush(h, [nums1[i + 1] + nums2[j], i + 1, j])
            if j + 1 < len(nums2) and (i, j + 1) not in visited:
                visited.add((i, j + 1))
                heapq.heappush(h, [nums1[i] + nums2[j + 1], i, j + 1])
        return res
        
        # MLE
        
        arr, res = [], []
        for a in nums1:
            for b in nums2:
                heapq.heappush(arr, [a + b, [a, b]])
        while k:
            res.append(heapq.heappop(arr)[1])
            k -= 1
        return res