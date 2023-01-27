class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        
        def dfs(idx: int, children: List[int]) -> None:
            
            nonlocal res
            
            if idx == len(cookies):
                res = min(res, max(children))
                return
        
            for i in range(k):
                children[i] += cookies[idx]
                
                if children[i] < res:
                    dfs(idx + 1, children)
                    
                children[i] -= cookies[idx]
        
        res = inf
        dfs(0, [0] * k)
        
        return res
