class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        seen, common, res = set(), 0, []
        for i in range(0, len(A)):
            n1, n2 = A[i], B[i]
            if n1 in seen:
                common += 1
            seen.add(n1)
            if n2 in seen:
                common += 1
            seen.add(n2)
            res.append(common)
        return res
        
        n = len(A)
        cnts, common, res = [0] * (n+1), 0, []
        for i in range(0, n):
            n1, n2 = A[i], B[i]
            cnts[n1] += 1
            cnts[n2] += 1
            if cnts[n1] > 1:
                common += 1
            if n1 != n2 and cnts[n2] > 1:
                common += 1
            res.append(common)
        return res
        
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
                    