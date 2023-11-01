class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        def dfs(src: int, target: int, r: int, c: int) -> None:
            if r >= 0 and r < len(image) and c >= 0 and c < len(image[r]) and image[r][c] == src and image[r][c] != target:
                image[r][c] = target
                dfs(src, target, r+1, c)
                dfs(src, target, r-1, c)
                dfs(src, target, r, c+1)
                dfs(src, target, r, c-1)
            
        dfs(image[sr][sc], color, sr, sc)
        return image