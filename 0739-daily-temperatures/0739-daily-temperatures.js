/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const res = Array(n).fill(0)
    const stack = []
    for (let i=0; i < temperatures.length; i++) {
        if (stack.length) {
            while (stack.length && stack[stack.length-1][0] < temperatures[i]) {
                const [temp, j] = stack.pop()
                res[j] = i - j
            }
        }
        stack.push([temperatures[i], i])
    }
    return res
};