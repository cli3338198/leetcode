class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        return map(lambda x: x[0], sorted(zip(names, heights), key=lambda x: x[1], reverse=True))