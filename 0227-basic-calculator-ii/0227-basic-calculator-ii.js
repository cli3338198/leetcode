/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/[^0-9]/gm, " $& ").split(/\s+/g)
    const stack = []
    let shouldFoil = false
    for (const c of s) {
        if (c === " ") {
            continue
        } else if (['+', '-', '*', '/'].includes(c)) {
            if (['*', '/'].includes(c)) shouldFoil = true
            stack.push(c)
        } else {
            stack.push(Number(c))
        }
        if (shouldFoil && typeof stack.at(-1) === "number") {
            const lastNum = stack.pop()
            const op = stack.pop()
            const prevNum = stack.pop()
            shouldFoil = false
            if (op === "*") {
                stack.push(prevNum * lastNum)
            } else {
                stack.push(Math.floor(prevNum / lastNum))
            }
        }
    }
    let res = 0, sign = 1
    for (const t of stack) {
        if (typeof t === "number") {
            res += sign * t
        } else {
            if (t === "-") {
                sign = -1
            } else {
                sign = 1
            }
        }
    }
    return res
};