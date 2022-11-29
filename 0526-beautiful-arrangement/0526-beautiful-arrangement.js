/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    const visited = new Set()
    let res = 0
    helper(0)
    return res
    
    function helper(i) {
        if (i === n) return res++
        for (let j=1; j <= n; j++) {
            if (!visited.has(j-1) && ((j % (i+1) === 0) || ((i+1) % j === 0))) {
                visited.add(j-1)
                helper(i+1)
                visited.delete(j-1)
            }
        }
    }
};

