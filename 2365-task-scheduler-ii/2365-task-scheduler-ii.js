/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    const map = {}
    let day = 0
    for (const t of tasks) {
        day = Math.max(day + 1, (map[t] || -Infinity) + space + 1)
        map[t] = day
    }
    return day
};