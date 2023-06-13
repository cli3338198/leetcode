/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let res = 0
    for (let i=1; i <= num; i++) {
        if (isEvenSum(i)) res++
    }
    return res
    
    function isEvenSum(num) {
        let res = 0
        while (num) {
            res += num % 10
            num = Math.floor(num / 10)
        }
        return res % 2 === 0
    }
};