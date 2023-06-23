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

maximumUnits = function(boxTypes, truckSize) {
    const boxes = Array(1001).fill(0)
    for (let i=0; i < boxTypes.length; i++) {
        const [numberBoxes, numberUnitsPerBox] = boxTypes[i]
        boxes[numberUnitsPerBox] += numberBoxes
    }
    let res = 0
    for (let i=1000; i >= 1 && truckSize > 0; i--) {
        if (boxes[i] > 0) {
            const noBoxes = Math.min(boxes[i], truckSize)
            res += noBoxes * i
            truckSize -= noBoxes
        }
    }
    return res
}