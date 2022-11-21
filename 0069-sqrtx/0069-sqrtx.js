/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    let lo = 1
    let hi = x
    while (true) {
        const mid = Math.floor((lo+hi)/2)
        const sqr = mid ** 2
        if (sqr > x) {
            hi = mid
        } else if (sqr < x) {
            lo = mid
        } 
        if (sqr <= x && x < (mid+1) * (mid+1)) {
            return mid
        }
    }
};