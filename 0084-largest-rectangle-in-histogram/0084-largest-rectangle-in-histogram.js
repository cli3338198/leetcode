/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length
    const left = []
    let stack = []
    for (let i=0; i < n; i++) {
        while (stack.length && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop()
        }
        left[i] = stack.length ? stack[stack.length-1]+1 : 0
        stack.push(i)
    }
    stack = []
    const right = []
    for (let i=n-1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length-1]] >= heights[i]) {
            stack.pop()
        }
        right[i] = stack.length ? stack[stack.length-1]-1 : n-1
        stack.push(i)
    }
    let res = 0
    for (let i=0; i < n; i++) {
        res = Math.max(res, heights[i]*(right[i]-left[i]+1))
    }
    return res
};