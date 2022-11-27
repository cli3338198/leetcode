/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0
    let tens = 0
    for (const b of bills) {
        let change = b - 5
        if (b === 5) {
            fives++
        } else if (b === 10) {
            fives--
            tens++
            if (fives < 0) return false
        } else {
            let change = 15
            while (change >= 10 && tens > 0) {
                change -= 10
                tens--
            }
            while (change >= 5 && fives > 0) {
                change -= 5
                fives--
            }
            if (change > 0) return false
        }
    }
    return true
};