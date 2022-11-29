/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    const sum = matchsticks.reduce((acc, val) => acc + val, 0)
    if (sum % 4 !== 0) return false
    const sides = Array(4).fill(sum / 4)
    matchsticks.sort((a, b) => b - a)
    return helper(0)
    
    function helper(i) {
        if (i >= matchsticks.length) {
            return true
        }
        for (let j=0; j < sides.length; j++) {
            if (matchsticks[i] <= sides[j]) {
                sides[j] -= matchsticks[i]
                if (helper(i+1)) return true
                sides[j] += matchsticks[i]
            }
        }
        return false
    }
};