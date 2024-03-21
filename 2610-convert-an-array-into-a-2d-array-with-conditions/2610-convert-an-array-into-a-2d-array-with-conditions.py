class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        counter = Counter(nums)
        res = [[]]
        for num, count in counter.items():
            cnt = count
            for arr in res:
                if cnt:
                    arr.append(num)
                    cnt -= 1
                else:
                    break
            for _ in range(0, cnt):
                res.append([num])
        return res        
        