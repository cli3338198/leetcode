/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
class Heap {
  constructor(compare) {
    this.compare = compare
    this.h = []
  }
  push(a) {
    this.h.push(a);
    this.bubbleUp(this.h.length - 1)
  }
  pop() {
    if (this.h.length > 1) {
      const temp = this.h[0]
      this.h[0] = this.h.pop()
      this.heapify(0)
      return temp
    } else {
      return this.h.pop()
    }
  }
  heapify(p) {
    let l = 2 * p + 1
    let r = 2 * p + 2
    while (
      (l in this.h && this.compare(this.h[p], this.h[l])) ||
      (r in this.h && this.compare(this.h[p], this.h[r]))
    ) {
      let t = p
      if (l in this.h && this.compare(this.h[t], this.h[l])) t = l
      if (r in this.h && this.compare(this.h[t], this.h[r])) t = r
      if (t !== p) {
        this.swap(t, p)
        p = t
        l = 2 * p + 1
        r = 2 * p + 2
      }
    }
  }
  bubbleUp(c) {
    let p = Math.ceil(c / 2) - 1
    while (p in this.h && this.compare(this.h[p], this.h[c])) {
      this.swap(p, c)
      c = p
      p = Math.ceil(c / 2) - 1
    }
  }
  swap(i, j) {
    [this.h[i], this.h[j]] = [this.h[j], this.h[i]]
  }
}

var leastInterval = function(tasks, n) {
    const map = {}
    for (const task of tasks) {
        map[task] = map[task] + 1 || 1
    }
    tasks = new Heap((a, b) => a < b)
    Object.values(map).forEach(cnt => tasks.push(cnt))
    const q = []
    let time = 0
    while (tasks.h.length || q.length) {
        time++
        if (tasks.h.length) {
            const cnt = tasks.pop() - 1
            if (cnt > 0) q.push([cnt, time + n])
        }
        if (q.length && q[0][1] <= time) {
            const [cnt, ] = q.shift()
            tasks.push(cnt)
        }
    }
    return time
};