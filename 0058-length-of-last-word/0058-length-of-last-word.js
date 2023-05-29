/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").at(-1).length
};

lengthOfLastWord = function(s) {
    return s.split(/\s+/).filter(x => x.length).at(-1).length
}
