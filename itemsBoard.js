// given list of items, {id: number, height: number} and columns
// create a grid of items that:
// item must be placed in leftmost column or column with smallest accumulated height, (sum of all heights of all items in column)

class Heap {
  constructor(compare) {
    this.h = [];
    this.compare = this.compare(compare);
  }

  push(item) {
    this.h.push(item);
    this.bubbleUp(this.h.length - 1);
  }

  bubbleUp(c) {
    let p = Math.ceil(c / 2) - 1;
    while (p in this.h && this.compare(p, c)) {
      this.swap(p, c);
      c = p;
      p = Math.ceil(c / 2) - 1;
    }
  }

  pop() {
    if (this.h.length > 1) {
      const top = this.h[0];
      this.h[0] = this.h.pop();
      this.heapify(0);
      return top;
    }
  }

  heapify(p) {
    let l = 2 * p + 1;
    let r = 2 * p + 2;
    while (
      (l in this.h && this.compare(p, l)) ||
      (r in this.h && this.compare(p, r))
    ) {
      let t = p;
      if (l in this.h && this.compare(t, l)) t = l;
      if (r in this.h && this.compare(t, r)) t = r;
      if (t !== p) {
        this.swap(t, p);
        p = t;
        l = 2 * p + 1;
        r = 2 * p + 2;
      }
    }
  }

  swap(p, c) {
    [this.h[p], this.h[c]] = [this.h[c], this.h[p]];
  }

  compare(compare) {
    return function (a, b) {
      return compare(this.h[a], this.h[b]);
    };
  }
}

function layout(items, columns) {
  // create grid of column width and fill with arrays
  const grid = Array(columns)
    .fill(0)
    .map(() => []);

  const priorityQueue = new Heap((unit1, unit2) => unit1[0] > unit2[0]);

  // push all columns to priority queue
  for (let i = 0; i < columns; i++) {
    priorityQueue.push([0, i]);
  }

  for (const item of items) {
    let [height, columnIndex] = priorityQueue.pop();

    height += item.height;
    grid[columnIndex].push(item);

    priorityQueue.push([height, columnIndex]);
  }

  return grid;
}

console.log(
  layout(
    [
      { id: 1, height: 30 },
      { id: 2, height: 20 },
      { id: 3, height: 10 },
      { id: 4, height: 20 },
    ],
    2
  )
);
