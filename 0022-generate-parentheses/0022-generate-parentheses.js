/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    helper(0, 0, '')
    return res
    
    function helper(l, r, cur) {
        if (l === r && l === n) {
            return res.push(cur)
        }
        if (l < n) helper(l+1, r, cur + "(")
        if (r < l) helper(l, r+1, cur + ")")
    }
};

generateParenthesis = function(n) {
    const q = [["", 0, 0]]
    for (let i=0; i < (2 * n); i++) {
        const len = q.length
        for (let j=0; j < len; j++) {
            const [cur, l, r] = q.shift()
            if (l < n) q.push([cur + "(", l+1, r])
            if (r < l) q.push([cur + ")", l, r+1])
        }
    }
    return q.map(x => x[0])
}

generateParenthesis = function(n) {
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n === 0) return [['']]
        if (n in dp) return dp[n]
        const res = []
        for (let i=0; i < n; i++) {
            for (const sub1 of helper(n-i-1)) {
                for (const sub2 of helper(i)) {
                    res.push(sub1 + "(" + sub2 + ")")
                }
            }
        }
        return dp[n] = res
    }
}
