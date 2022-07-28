/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    
    let res = 0
    for (let i=0; i < s.length; i++) {
        if (map[`${s[i]}${s[i+1]}`]) {
            res += map[`${s[i]}${s[i+1]}`]
            i++
        } else {
            res += map[s[i]]
        }
    }
    return res
};