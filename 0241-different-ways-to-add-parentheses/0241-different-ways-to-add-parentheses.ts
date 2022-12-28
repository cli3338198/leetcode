/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const dp = {}
    return helper(expression)
    
    function helper(expression) {
        if (expression in dp) {
            return dp[expression]
        }
        if (expression.length === 1) {
            return dp[expression] = [Number(expression)]
        }
        const res = []
        let flag = false
        for (let i=0; i < expression.length; i++) {
            const e = expression[i]
            if (e === '-' || e === '+' || e === '*') {
                flag = true
                for (const j of diffWaysToCompute(expression.substring(0, i))) {
                    for (const k of diffWaysToCompute(expression.substring(i+1))) {
                        if (e === '-') {
                            res.push(j - k)
                        } else if (e === '+') {
                            res.push(j + k)
                        } else {
                            res.push(j * k)
                        }
                    }
                }
            }
        }
        if (!flag) {
            return dp[expression] = [Number(expression)]
        }
        return dp[expression] = res
    }
};