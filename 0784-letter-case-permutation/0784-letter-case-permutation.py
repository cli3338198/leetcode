class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        
        q = deque([s])
        
        for i in range(len(s)):
            if s[i].isalpha():
                length = len(q)
                
                for j in range(length):
                    cur = q.popleft()
                    q.append(cur[0:i:] + cur[i].upper() + cur[i+1::])
                    q.append(cur[0:i:] + cur[i].lower() + cur[i+1::])
                
                
        return q
        