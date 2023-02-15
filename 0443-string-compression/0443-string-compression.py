class Solution:
    def compress(self, chars: List[str]) -> int:
        
        def num_to_arr(n: int) -> List[int]:
            res = []
            
            while n > 0:
                res.append(n % 10)
                n = n // 10
            
            return res
        
        i = 0
        j = 0
        
        while j < len(chars):
            c = chars[j]
            
            cnt = 1
            while j + 1 < len(chars) and chars[j+1] == c:
                cnt += 1
                j += 1
            
            chars[i] = c
            i += 1
            j += 1
            
            if cnt == 1: continue
                
            for n in num_to_arr(cnt)[::-1]:
                chars[i] = str(n)
                i += 1
                
        return i
            
            