/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = []
    for (const c of s) {
        if (c === ')') {
            if (stack[stack.length-1] === "(") {
                stack.pop()
                let score = 1
                while (typeof stack[stack.length-1] === 'number') {
                    score += stack.pop()
                }
                stack.push(score)                
            } else if (stack[stack.length-2] === '(') {
                let score = stack.pop() * 2
                stack.pop()
                while (typeof stack[stack.length-1] === 'number') {
                    score += stack.pop()
                }
                stack.push(score)
            }
        } else {
            stack.push(c)
        }
    }
    return stack[0]
};