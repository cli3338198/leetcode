class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        arr = [0] * 26
        for c in s:
            arr[ord(c)-97] += 1
        for c in t:
            arr[ord(c)-97] -= 1
        return sum([1 for x in arr if x == 0]) == 26