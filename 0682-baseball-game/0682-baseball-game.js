/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const scores = []
    for (const op of operations) {
        switch (op) {
            case "+":
                scores.push(scores.at(-1) + scores.at(-2))
                break
            case "D":
                scores.push(scores.at(-1) * 2)
                break
            case "C":
                scores.splice(scores.length-1)
                break
            default:
                scores.push(+op)
        }
    }
    return scores.reduce((acc, val) => acc + val, 0)
};