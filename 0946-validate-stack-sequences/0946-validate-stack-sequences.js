/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let i = 0
    const stack = []
    for (const p of pushed) {
        stack.push(p)
        while (stack.length && i < popped.length && stack[stack.length-1] === popped[i]) {
            stack.pop()
            i++
        }
    }
    return i === popped.length
};