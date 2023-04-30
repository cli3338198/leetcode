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