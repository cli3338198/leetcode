import heapq

def meeting3(meetings, rooms):
  """_summary_

  rooms: integer, 0 - n-1
  meetings: list of meetings (not inclusive), (0,3) and (3,4) is OK
  all start times for meetings are unique

  1. each meeting takes place in the room of lowest integer
  2. if no availablel rooms, meeting will be delayed, will be same duration
  3. when rooms become avialbe, meetings with earliest original start time are given priority

  return the number of the room that had the most meetings

  meetings=[[0,10], [1,5], [2,7], [3,4]], rooms=2
  output=0

  """

  # store counts for each room
  counts = [0] * rooms

  # available rooms, use heap to get room with min number
  available_rooms = [n for n in range(0, rooms)]
  heapq.heapify(available_rooms)

  # sort the meetings by start 
  meetings.sort(key=lambda x: x[0])

  # create occupied rooms, sort by earliest ending time
  occupied_rooms = [] # (end_time, room)
  heapq.heapify(occupied_rooms)
  
  # set the start time to first meeting
  time = 0

  # while we have meetings
  while meetings:
    # replenish from occupied rooms if time is up
    if occupied_rooms and time >= occupied_rooms[0][0]:
      _, room = heapq.heappop(occupied_rooms)
      heapq.heappush(available_rooms, room)

    # if rooms available
    # increment count of uses of that room
    # append appropriate time to occupeid rooms
    if time >= meetings[0][0]:  
      if available_rooms:
        room = heapq.heappop(available_rooms)
        counts[room] += 1

        # get earliest meeting
        start, end = meetings[0]
        meetings = meetings[1::]
        duration = end - start
        heapq.heappush(occupied_rooms, [time + duration, room])

    # increment time
    time += 1

  # get meeting room with highest count
  count = room_number = 0
  for i, cnt in enumerate(counts):
    if cnt > count:
      count = cnt
      room_number = i

  return room_number


print(meeting3([[0,10], [1,5], [2,7], [3,4]], 2), 0)
