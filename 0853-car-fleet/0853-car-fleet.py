class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars, stack = list(zip(position, speed)), []
        cars.sort()
        for pos, speed in cars:
            t = (target - pos) / speed
            while stack and stack[-1] <= t:
                stack.pop()
            stack.append(t)
        return len(stack)
        
        