class Solution:
    def queensAttacktheKing(self, queens: List[List[int]], king: List[int]) -> List[List[int]]:
        
        queens = set([(c, r) for c, r in queens])
        res = []
        
        for r in [-1, 0, 1]:
            for c in [-1, 0, 1]:
                for i in range(1, 8):
                    kc = king[0] + c * i
                    kr = king[1] + r * i
                    
                    if (kc, kr) in queens:
                        res.append([kc, kr])
                        break
                        
        return res