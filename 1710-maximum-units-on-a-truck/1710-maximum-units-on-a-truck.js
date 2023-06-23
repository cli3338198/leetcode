/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(([,a], [,b]) => b - a)
    let res = 0
    for (let i=0; i < boxTypes.length && truckSize > 0; i++) {
        const noBoxes = Math.min(boxTypes[i][0], truckSize)
        truckSize -= noBoxes
        res += noBoxes * boxTypes[i][1]
    }
    return res
};