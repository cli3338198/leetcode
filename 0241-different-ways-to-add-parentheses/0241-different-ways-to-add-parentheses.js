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
            const c = expression[i]
            if (c === '-' || c === '+' || c === '*') {
                flag = true
                for (const l of diffWaysToCompute(expression.substring(0, i))) {
                    for (const r of diffWaysToCompute(expression.substring(i+1))) {
                        if (c === '-') {
                            res.push(l - r)
                        } else if (c === '+') {
                            res.push(l + r)
                        } else {
                            res.push(l * r)
                        }
                    }
                }
            }
        }
        if (!flag) return dp[expression] = [Number(expression)]
        return dp[expression] = res
    }
};