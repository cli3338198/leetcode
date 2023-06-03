/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const map = {}
    let res = -Infinity
    for (let i=lowLimit; i <= highLimit; i++) {
        const no = getBoxNumber(i)
        map[no] = map[no] + 1 || 1
        res = Math.max(res, map[no])
    }
    return res
    
    function getBoxNumber(n) {
        let res = 0
        while (n) {
            res += n % 10
            n = Math.floor(n / 10)
        }
        return res
    }
};