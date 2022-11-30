/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const res = []
    for (let i=0, ops=0, count=0; i < boxes.length; i++) {
        res[i] = ops
        count += boxes[i] === '1' ? 1 : 0
        ops += count
    }
    for (let i=boxes.length-1, ops=0, count=0; i >= 0; i--) {
        res[i] += ops
        count += boxes[i] === '1' ? 1 : 0
        ops += count
    }
    return res
};