/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    groupSizes = groupSizes.map((n, i) => [n, i])
    groupSizes.sort(([a], [b]) => b - a)
    const res = [[]]
    for (const [size, i] of groupSizes) {
        if (res.at(-1).length < size) {
            res.at(-1).push(i)
        } else {
            res.push([i])
        }
    }
    return res
};