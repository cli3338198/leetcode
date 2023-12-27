/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b)
    let maxScore = 0, curScore = 0, l = 0, r = tokens.length-1
    while (l <= r) {
        if (power >= tokens[l]) {
            curScore++
            power -= tokens[l]
            l++
            maxScore = Math.max(maxScore, curScore)
        } else if (power < tokens[l] && curScore > 0) {
            curScore--
            power += tokens[r]
            r--
        } else {
            return maxScore
        }
    }
    return maxScore
};