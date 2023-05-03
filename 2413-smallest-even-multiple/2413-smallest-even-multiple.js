/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    for (let i=2; i <= 150 * 2; i++) {
        if (!(i % 2) && !(i % n)) {
            return i
        }
    }
};

smallestEvenMultiple = function(n) {
    if ((n % 2)) n = 2*n
    return n
}