/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0
    operations.forEach(op => {
        if (op.includes("++")) {
            res++
        } else {
            res--
        }
    })
    return res
};

finalValueAfterOperations = function(operations) {
    const map = {
        "++X": 1,
        "X++": 1,
        "--X": -1,
        "X--": -1
    }
    return operations.reduce((acc, op) => acc + map[op], 0)
}