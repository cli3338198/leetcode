/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const map = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    const set = new Set()
    const stack = []
    for (const c of s) {
        if (set.has(c)) {
            map[c]--
            continue
        }
        while (stack.length && stack[stack.length-1] > c && map[stack[stack.length-1]] > 0) {
            set.delete(stack.pop())
        }
        set.add(c)
        map[c]--
        stack.push(c)
    }
    return stack.join("")
};