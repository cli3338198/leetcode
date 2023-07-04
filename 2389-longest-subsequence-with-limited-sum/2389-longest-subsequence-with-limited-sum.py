class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        res = []
        for q in queries:
            cnt = 0
            curq = q
            for n in nums:
                if n <= curq:
                    curq -= n
                    cnt += 1
                else:
                    break
            res.append(cnt)
        return res
            