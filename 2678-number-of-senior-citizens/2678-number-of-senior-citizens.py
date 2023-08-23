class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return sum([1 for citizen in details if int(citizen[-4] + citizen[-3]) > 60])