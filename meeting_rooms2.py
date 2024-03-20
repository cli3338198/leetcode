# Description
# Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.)

# (0,8),(8,10) is not conflict at 8

# Example
# Example1

# Input: intervals = [(0,30),(5,10),(15,20)]
# Output: 2
# Explanation:
# We need two meeting rooms
# room1: (0,30)
# room2: (5,10),(15,20)
# Example2

# Input: intervals = [(2,7)]
# Output: 1
# Explanation: 
# Only need one meeting room

def min_meeting_rooms(intervals):
  events = []
  for start, end in intervals:
    events.append((start, 1))
    events.append((end + 1, -1))
  cur = res = 0
  for _, n in sorted(events):
    cur += n
    res = max(res, cur)
  return res

  #

  starts = sorted([s for s, _ in intervals])
  ends = sorted([e for _, e in intervals])
  s = e = cur = res = 0
  while s < len(starts):
    if starts[s] < ends[e]:
      cur += 1
      s += 1
    else:
      cur -= 1
      e += 1
    res = max(res, cur)
  return res

  #

  intervals.sort(key=lambda x: x[0])
  room_end_times, current_rooms, max_rooms = [], 1, 0
  for interval in intervals:
    if not room_end_times:
      room_end_times.append(interval[1])
    elif room_end_times[-1] > interval[0]:
      current_rooms += 1
      room_end_times.append(interval[1])
    else:
      current_rooms -= 1
      room_end_times.pop()
    max_rooms = max(max_rooms, current_rooms)
  return max_rooms

print(min_meeting_rooms([(0,30),(5,10),(15,20)]), 2)
print(min_meeting_rooms([(2,7)]), 1)
