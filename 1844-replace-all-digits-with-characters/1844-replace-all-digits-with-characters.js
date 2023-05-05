/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    return s.split("")
        .map((c, idx, arr) => idx % 2 === 0 ? c : shift(arr[idx-1], +arr[idx]))
        .join("")
    
    function shift(c, n) {
        const abc = 'abcdefghijklmnopqrstuvwxyz'
        const idx = abc.indexOf(c)
        return abc[idx+n]
    }
};