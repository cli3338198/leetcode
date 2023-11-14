/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for (const c of s) {
        if (stack.length >= 2 && stack.at(-2) === "a" && stack.at(-1) === "b" && c === "c") {
            stack.pop()
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return !stack.length
};

isValid = function(s) {
    while (s.includes('abc')) {
        s = s.replaceAll('abc', '')
    }
    return !s.length
}

isValid = function(s) {
    if (!s.length) return true
    if (!s.includes('abc')) return false
    return isValid(s.replace('abc', ''))
}