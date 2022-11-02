/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const res = Array(num_people).fill(0)
    let count = 1
    let idx = 0
    while (candies > 0) {
        res[idx] += count
        idx++
        candies -= count
        count++
        if (idx === num_people) idx = 0
        if (count > candies) count = candies
    }
    return res
};