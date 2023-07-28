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

backspaceCompare = function(s, t) {
    let i = s.length-1
    let j = t.length-1
    while (i > -1 || j > -1) {
        const i1 = helper(s, i)
        const j1 = helper(t, j)
        if (i1 < 0 && j1 < 0) {
            return true
        }
        if (i1 < 0 || j1 < 0) {
            return false
        }
        if (s[i1] !== t[j1]) {
            return false
        }
        i = i1 - 1
        j = j1 - 1
    }
    return true
    
    function helper(s, i) {
        let backspace = 0
        while (i >= 0) {
            if (s[i] === "#") {
                backspace++
            } else if (backspace > 0) {
                backspace--
            } else {
                break
            }
            i--
        }
        return i
    }
}