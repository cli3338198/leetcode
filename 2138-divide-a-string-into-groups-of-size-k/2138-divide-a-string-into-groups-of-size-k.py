class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        res = []
        for i in range(0, len(s), k):
            cur = ""
            for j in range(i, min(i+k, len(s))):
                cur += s[j]
            if len(cur) != k:
                for k in range(0, k-len(cur)):
                    cur += fill
            res.append(cur)
        return res