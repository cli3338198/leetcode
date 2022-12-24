class Solution:
    def partition(self, s: str) -> List[List[str]]:
        
        res = []
        
        def is_palindrome(s: str) -> bool:
            
            a = 0
            b = len(s) - 1
            
            while a < b:
                if s[a] != s[b]: return False
                a += 1
                b -= 1
                
            return True
        
        def helper(s: str, list: List[str]) -> None:
            
            if not s:
                res.append(list.copy())
                return 
            
            for i in range(1, len(s) + 1):
                left = s[:i:]
                right = s[i::]
                
                if is_palindrome(left):
                    list.append(left)
                    helper(right, list)
                    list.pop()
                    
        helper(s, [])
        
        return res