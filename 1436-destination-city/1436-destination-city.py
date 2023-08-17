class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        loop, cities = set(), set()
        for u, v in paths:
            cities.add(u)
            cities.add(v)
            loop.add(u)
        return list(cities - loop)[0]