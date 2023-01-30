/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    helper(0, 0, '')
    return res
    
    function helper(left, right, cur) {
        if (left === right && left === n) {
            return res.push(cur)
        }
        if (left < n) helper(left + 1, right, cur + "(")
        if (right < left) helper(left, right + 1, cur + ")")
    }
};

generateParenthesis = function(n) {
    const q = [[0, 0, '']]
    for (let i=0; i < (n * 2); i++) {
        const len = q.length
        for (let i=0; i < len; i++) {
            const [left, right, cur] = q.shift()
            if (left < n) q.push([left + 1, right, cur + "("])
            if (right < left) q.push([left, right + 1, cur + ")"])
        }
        
    }
    return q.map(arr => arr[2])
}