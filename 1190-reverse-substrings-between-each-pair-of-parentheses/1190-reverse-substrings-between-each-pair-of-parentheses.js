/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = []
    for (const c of s) {
        if (c === ")") {
            let reversed = ""
            while (stack.at(-1) !== "(") {
                reversed += stack.pop()
            }
            stack.pop()
            stack.push(...reversed)
        } else {
            stack.push(c)
        }
    }
    return stack.join("")
};