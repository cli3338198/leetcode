class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        
        def my_sort(coord: List[int]):
            r, c = coord
            return abs(r - rCenter) + abs(c - cCenter)
        
        arr = [[r, c] for c in range(cols) for r in range(rows)]
        return sorted(arr, key=my_sort)
            