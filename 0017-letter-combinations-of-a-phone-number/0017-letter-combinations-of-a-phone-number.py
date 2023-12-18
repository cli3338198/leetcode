class Solution:
    def __init__(self):
        self.map = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
        self.combinations = []
    
    def rec(self, i: int, digits: str, cur: str) -> None:
        if i == len(digits):
            self.combinations.append(cur)
            return
        for char in self.map[digits[i]]:
            self.rec(i+1, digits, cur+char)
    
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        mp = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
        self.rec(0, digits, "")
        return self.combinations
        
        #
        
        dp = [[] for _ in range(0, len(digits)+1)]
        dp[0].append("")
        for i in range(1, len(digits)+1):
            for sub in dp[i-1]:
                for char in mp[digits[i-1]]:
                    dp[i].append(sub + char)
        return dp[-1]