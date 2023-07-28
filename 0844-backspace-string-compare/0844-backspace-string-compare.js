/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return helper(s) === helper(t)
    
    function helper(s) {
        const stack = []
        for (const c of s) {
            if (c === "#") {
                if (stack.length) {
                    stack.pop()
                }
            } else {
                stack.push(c)
            }
        }
        return stack.join("")
    }
};