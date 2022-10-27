/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = ''
    for (let i=2; i < num.length; i++) {
        if (num[i] === num[i-1] && num[i] === num[i-2]) {
            const s = num.substring(i-2, i+1)
            if (s > res) {
                res = s
            }
        }
    }
    return res
};