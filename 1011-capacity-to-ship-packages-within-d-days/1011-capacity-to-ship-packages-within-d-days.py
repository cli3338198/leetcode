class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        max_wt = total_wt = 0
        for wt in weights:
            max_wt = max(max_wt, wt)
            total_wt += wt
            
        def can_ship(cur_wt: int) -> bool:
            nonlocal days
            nonlocal weights
            day, wt = 1, 0
            for w in weights:
                wt += w
                if wt > cur_wt:
                    wt = w
                    day += 1
            return day <= days
        
        while max_wt < total_wt:
            cur_wt = (max_wt+total_wt)//2
            if can_ship(cur_wt):
                total_wt = cur_wt
            else:
                max_wt = cur_wt + 1
        return max_wt