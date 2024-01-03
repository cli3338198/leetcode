/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const n = costs.length/2
    costs.sort((a, b) => (a[1]-a[0]) - (b[1]-b[0]))
    let res = 0
    for (let i=0; i < n; i++) {
        res += costs[i][1]
    }
    for (let i=n; i < costs.length; i++) {
        res += costs[i][0]
    }
    return res
    
    //
    
    let min = Infinity
    backtrack(0, 0, 0, 0)
    return min
    
    function backtrack(i, a, b, curCost) {
        if (i === costs.length) {
            return min = Math.min(min, curCost)
        }
        if (a < n) backtrack(i+1, a+1, b, curCost+costs[i][0])
        if (b < n) backtrack(i+1, a, b+1, curCost+costs[i][1])
    }
};