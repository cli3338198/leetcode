/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    score = score.map((rank, idx) => ([rank, idx]))
    score.sort((a, b) => b[0] - a[0])
    let rank = 1
    for (let i=0; i < score.length; i++) {
        if (rank === 1) {
            score[i][0] = "Gold Medal"
        } else if (rank === 2) {
            score[i][0] = "Silver Medal"
        } else if (rank === 3) {
            score[i][0] = "Bronze Medal"
        } else {
            score[i][0] = String(rank)
        }
        rank++
    }
    score.sort((a, b) => a[1] - b[1])
    return score.map(x => x[0])
};