class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        students, sandwiches, have_nots = deque(students), deque(sandwiches), 0
        while students:
            if students[0] == sandwiches[0]:
                students.popleft()
                sandwiches.popleft()
                have_nots = 0
            else:
                students.append(students.popleft())
                have_nots += 1
                if have_nots == len(students):
                    break
        return have_nots
            