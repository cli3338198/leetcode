/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const n = people.length
    people.sort(([a], [b]) => a - b)
    const res = Array(n).fill(-1)
    let count = 0
    for (let i=0; i < n; i++) {
        const [h, k] = people[i]
        count = k
        for (let j=0; j < n; j++) {
            if (res[j] === -1 && count === 0) {
                res[j] = people[i]
                break
            } else if (res[j] === -1 || res[j][0] >= h) {
                count--
            }
        }
    }
    return res
};