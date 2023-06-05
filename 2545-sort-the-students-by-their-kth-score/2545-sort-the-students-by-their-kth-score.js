/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    return score.sort((a, b) => a[k] > b[k] ? -1 : 1)
};