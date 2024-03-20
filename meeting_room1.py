# Description
# Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

# Example1

# Input: intervals = [(0,30),(5,10),(15,20)]
# Output: false
# Explanation: 
# (0,30), (5,10) and (0,30),(15,20) will conflict

# Example2

# Input: intervals = [(5,8),(9,15)]
# Output: true
# Explanation: 
# Two times will not conflict 

def can_attend_meetings(intervals):
  intervals.sort(key=lambda x: x[0])
  for i in range(0, len(intervals) - 1):
    if intervals[i][1] > intervals[i + 1][0]:
      return False
  return True

  #

  intervals.sort()
  last_end = float("-inf")
  for interval in intervals:
    if interval[0] >= last_end:
      last_end = interval[1]
    else:
      return False
  return True

print(can_attend_meetings([(0,30),(5,10),(15,20)]), False)
print(can_attend_meetings([(5,8),(9,15)]), True)
