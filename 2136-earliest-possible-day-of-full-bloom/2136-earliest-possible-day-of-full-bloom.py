class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        
        plants = [[pt, growTime[i]] for i, pt in enumerate(plantTime)]
        plants = sorted(plants, key=lambda x: x[1], reverse=True)
        
        time, res = 0, 0
        
        for pt, gt in plants:
            time += pt
            res = max(res, time + gt)
        
        return res
        