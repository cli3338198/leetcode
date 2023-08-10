class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        mp, start, end, res = {}, 0, 0, []
        for i, c in enumerate(s):
            mp[c] = i
        for i, c in enumerate(s):
            end = max(end, mp[c])
            if i == end:
                res.append(end - start + 1)
                start = i + 1
        return res