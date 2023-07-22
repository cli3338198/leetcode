class Solution:
    def minSwaps(self, s: str) -> int:
        opened = count = 0
        for bracket in s:
            if bracket == "[":
                opened += 1
            else:
                if opened > 0:
                    opened -= 1
                else:
                    count += 1
                    opened += 1
        return count