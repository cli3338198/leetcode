/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = []
    for (const c of s) {
        if ('aeiouAEIOU'.includes(c)) {
            vowels.push(c)
        }
    }
    vowels.sort((a, b) => a < b ? 1 : -1)
    for (let i=0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            s = s.substring(0, i) + vowels.pop() + s.substring(i+1)
        }
    }
    return s
};