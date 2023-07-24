/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = []
    for (const c of s) {
        stack.push(c)
        if (stack.length >= 2) {
            const substring = stack.at(-2) + stack.at(-1)
            if (substring === "AB" || substring === "CD") {
                stack.pop()
                stack.pop()
            }
        }
    }
    return stack.length
};