class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        res, i, cnt = [0] * num_people, 0, 1
        while candies:
            res[i] += cnt
            candies -= cnt
            i += 1
            cnt += 1
            if i == num_people:
                i = 0
            if cnt > candies:
                cnt = candies
        return res