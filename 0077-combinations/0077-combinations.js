/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    helper(new Set(), 1, k, [])
    return res
    
    function helper(set, j, k, curList) {
        if (k === 0) {
            return res.push(curList.slice())
        }
        for (let i=j; i <= n; i++) {
            if (!set.has(i)) {
                set.add(i)
                curList.push(i)
                helper(set, i+1, k-1, curList)
                set.delete(i)
                curList.pop()
            }
        }
    }
};