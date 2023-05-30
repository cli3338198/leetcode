/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set('aeiouAEIOU'.split(""))
    for (let i=0, j=Math.floor(s.length/2), c1 = 0, c2 = 0; i < Math.floor(s.length/2) && j < s.length; i++, j++) {
        if (vowels.has(s[i])) c1++
        if (vowels.has(s[j])) c2++
        if (i === Math.floor(s.length/2)-1 && j === s.length-1) {
            return c1 === c2
        }
    }
};