class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        
        set_ = set(arr)
        res = 0
        
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                
                a, b, k = arr[i], arr[j], 2
                
                while (a + b in set_):
                    a, b, k = b, a + b, k + 1
                
                res = max(res, k)
        
        return res if res > 2 else 0
                    
        