class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []
        for op in operations:
            if op == "+":
                scores += [scores[-1] + scores[-2]]
            elif op == "D":
                scores += [scores[-1] * 2]
            elif op == "C":
                scores = scores[:-1:]
            else:
                scores += [int(op)]
        return sum(scores)