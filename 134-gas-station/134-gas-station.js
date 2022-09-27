/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const sumGas = gas.reduce((acc, val) => acc + val, 0)
    const sumCost = cost.reduce((acc, val) => acc + val, 0)
    if (sumGas < sumCost) return -1
    let total = 0
    let res = 0
    for (let i=0; i < gas.length; i++) {
        total += gas[i] - cost[i]
        if (total < 0) {
            total = 0
            res = i + 1
        }
    }  
    return res
};