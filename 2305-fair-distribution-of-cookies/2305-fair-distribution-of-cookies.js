/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    let res = Infinity
    helper(0, Array(k).fill(0))
    return res
    
    function helper(idx, arr) {
        if (idx === cookies.length) {
            return res = Math.min(res, Math.max(...arr))
        }
        for (let i=0; i < k; i++) {
            arr[i] += cookies[idx]
            helper(idx + 1, arr)
            arr[i] -= cookies[idx]
        }
    }
};