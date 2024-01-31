class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        odds, evens = [], []
        for n in nums:
            if n % 2 == 0:
                evens.append(n)
            else:
                odds.append(n)
        i, j, ans = 0, 0, []
        while i < len(odds) or j < len(odds):
            ans += [evens[j]] + [odds[i]]
            i += 1
            j += 1
        while i < len(odds):
            ans += [odds[i]]
            i += 1
        while j < len(evens):
            ans += [evens[j]]
            j += 1
        return ans
                