class MyStack:

    def __init__(self):
        self.a = deque()
        self.b = deque()

    def push(self, x: int) -> None:
        self.a.append(x)

    def pop(self) -> int:
        while len(self.a) > 1:
            self.b.append(self.a.popleft())
        temp = self.a.popleft()
        while len(self.b):
            self.a.append(self.b.popleft())
        return temp

    def top(self) -> int:
        return self.a[-1]      

    def empty(self) -> bool:
        return len(self.a) == 0
        


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()