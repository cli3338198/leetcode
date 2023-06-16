/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const res = Array(num_people).fill(0)
    let i = 0, cnt = 1
    while (candies) {
        res[i] += cnt
        i++
        candies -= cnt
        cnt++
        if (i === num_people) i = 0
        if (cnt > candies) cnt = candies
    }
    return res
};