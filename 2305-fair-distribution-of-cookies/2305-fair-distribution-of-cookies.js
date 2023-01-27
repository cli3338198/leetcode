/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    let res = Infinity
    helper(0, Array(k).fill(0))
    return res
    
    function helper(idx, children) {
        if (idx === cookies.length) {
            return res = Math.min(res, Math.max(...children))
        }
        for (let i=0; i < k; i++) {
            children[i] += cookies[idx]
            helper(idx + 1, children)
            children[i] -= cookies[idx]
        }
    }
};