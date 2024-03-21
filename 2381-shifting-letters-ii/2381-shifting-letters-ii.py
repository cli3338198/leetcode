class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        n = len(s)
        changes = [0] * (n + 1)
        for start, end, drc in shifts:
            drc = -1 if drc == 0 else 1
            changes[start] += drc
            changes[end + 1] -= drc
        res = ""
        for i in range(0, n):
            changes[i + 1] += changes[i]
            c = ord(s[i]) - ord('a') + changes[i]
            res += (chr((c % 26) + ord('a')))
        return res
        