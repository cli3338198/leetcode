class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        return "".join(["1" if n[i] == "0" else "0" for i, n in enumerate(nums)])