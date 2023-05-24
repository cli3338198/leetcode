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

calPoints = function(operations) {
    let res = 0
    const scores = []
    for (const op of operations) {
        if (op === "+") {
            const score = scores.at(-1) + scores.at(-2)
            scores.push(score)
            res += score
        } else if (op === "D") {
            const score = scores.at(-1) * 2
            scores.push(score)
            res += score
        } else if (op === "C") {
            const score = scores.at(-1)
            scores.pop()
            res -= score
        } else {
            scores.push(+op)
            res += +op
        }
    }
    return res
}