/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    // two pointers
    // if s is "" return 0
    // if s is palindrome return 1
    // return 2 because we can remove all the a's then all the b's
    // \U0001f9e0 \U0001f632
    
    if (s.length === 0) return 0
    let l = 0, r = s.length-1
    while (l < r) {
        if (s[l++] !== s[r--]) {
            return 2
        }
    }
    return 1
};