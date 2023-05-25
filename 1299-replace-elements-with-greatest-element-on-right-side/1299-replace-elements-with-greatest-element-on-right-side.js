/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const stack = [arr[arr.length-1]]
    arr[arr.length-1] = -1
    for (let i=arr.length-2; i >= 0; i--) {
        const temp = arr[i]
        arr[i] = stack[stack.length-1]
        if (temp > stack[stack.length-1]) {
            stack.push(temp)
        }
    }
    return arr
};

replaceElements = function(arr) {
    let max = -1
    for (let i=arr.length-1; i >= 0; i--) {
        const temp = arr[i]
        arr[i] = max
        max = Math.max(max, temp)
    }
    return arr
}