/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    for (const c of s) {
        if (c === "]") {
            let cur = ""
            while (stack.length && stack.at(-1) !== "[") {
                cur = stack.pop() + cur
            }
            stack.pop()
            let repeat = ""
            while (Number.isInteger(Number(stack.at(-1)))) {
                repeat = stack.pop() + repeat
            }
            stack.push(cur.repeat(repeat.length ? Number(repeat) : 1))
        } else {
            stack.push(c)
        }
    }
    return stack.join("")
};