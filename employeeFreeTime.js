// Description
// We are given a list schedule of employees, which represents the working time for each employee.

// Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

// Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

// The Intervals is an 1d-array. Each two numbers shows an interval. For example, [1,2,8,10] represents that the employee works in [1,2] and [8,10].

// Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

// 1.schedule and schedule[i] are lists with lengths in range [1, 100].
// 2.0 <= schedule[i].start < schedule[i].end <= 10^8.

// Example
// Example 1:

// Input：schedule = [[1,2,5,6],[1,3],[4,10]]
// Output：[(3,4)]
// Explanation:
// There are a total of three employees, and all common
// free time intervals would be [-inf, 1], [3, 4], [10, inf].
// We discard any intervals that contain inf as they aren't finite.
// Example 2:

// Input：schedule = [[1,3,6,7],[2,4],[2,5,9,12]]
// Output：[(5,6),(7,9)]
// Explanation：
// There are a total of three employees, and all common
// free time intervals would be [-inf, 1], [5, 6], [7, 9],[12,inf].
// We discard any intervals that contain inf as they aren't finite.

function employeeFreeTime(schedule) {
  const intervals = [];
  for (const employee of schedule) {
    let interval = null;
    for (let i = 0; i < employee.length; i++) {
      if (i % 2 === 0) {
        interval = [employee[i]];
      } else {
        interval.push(employee[i]);
        intervals.push(interval);
      }
    }
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let last = intervals[0][1];
  const freeTime = [];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start > last) {
      freeTime.push([last, start]);
      last = end;
    } else {
      last = Math.max(last, end);
    }
  }
  return freeTime;
}

console.log(
  employeeFreeTime([
    [1, 2, 5, 6],
    [1, 3],
    [4, 10],
  ]),
  "[(3,4)]"
);
console.log(
  employeeFreeTime([
    [1, 3, 6, 7],
    [2, 4],
    [2, 5, 9, 12],
  ]),
  "[(5,6),(7,9)]"
);
