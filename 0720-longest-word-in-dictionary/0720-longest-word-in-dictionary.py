class Solution:
    def longestWord(self, words: List[str]) -> str:
        
        words.sort(reverse=True)
        set_ = set(words)
        res = ''
        
        for word in words:
            cur = ''
            for char in word:
                cur += char
                if cur not in set_: 
                    break
                    
                if res == '' or len(cur) > len(res):
                    res = cur
                
                if len(cur) == len(res):
                    res = sorted([res, cur])[0]
        
        return res
                
                
                