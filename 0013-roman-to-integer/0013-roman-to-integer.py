class Solution:
    def romanToInt(self, s: str) -> int:
        romans = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]            
        ]
        res = 0
        for roman, num in romans:
            while s[:len(roman):] == roman:
                res += num
                s = s[len(roman)::]
        return res