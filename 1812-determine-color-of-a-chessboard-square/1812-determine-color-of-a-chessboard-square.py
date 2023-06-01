class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        mp = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8}
        return (mp[coordinates[0]] + int(coordinates[1])) % 2 != 0