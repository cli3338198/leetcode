class Solution:
    def minSumOfLengths(self, arr: List[int], target: int) -> int:
        
        n = len(arr)
        best = [inf] * n
        best_so_far = inf
        res = inf
        cur_sum = 0
        start = 0
        
        for i in range(n):
            cur_sum += arr[i]
            
            while cur_sum > target:
                cur_sum -= arr[start]
                start += 1
            
            if cur_sum == target:
                if start > 0 and best[start-1] != inf:
                    left_arr_len = best[start - 1]
                    right_arr_len = i - start + 1
                    res = min(res, left_arr_len + right_arr_len)
                    
                best_so_far = min(best_so_far, i - start + 1)
                
            best[i] = best_so_far
                
        return res if res != inf else -1