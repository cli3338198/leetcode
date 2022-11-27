/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map(reverse).join(" ")
    
    function reverse(str) {
        str = str.split("")
        return str.reverse().join("")
    }
};