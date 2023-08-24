class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        n, mp = len(A), {}
        res = []
        for i in range(0, n):
            mp[A[i]] = mp.get(A[i], 0) + 1
            cnt = 0
            for j in range(0, i+1):
                if mp.get(B[j], 0) >= 1:
                    cnt += 1
            res.append(cnt)
        return res
                    