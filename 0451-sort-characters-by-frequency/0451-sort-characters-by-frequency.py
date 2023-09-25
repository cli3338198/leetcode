class Solution:
    def frequencySort(self, s: str) -> str:
        pairs = sorted(Counter(s).items(), key=lambda x: x[1], reverse=True)
        res = ""
        for char, cnt in pairs:
            res += "".join([char for _ in range(cnt)])
        return res