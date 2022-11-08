/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const balloon = {
        b: 1,
        a: 1,
        l: 2,
        o: 2,
        n: 1
    }
    const map = {}
    for (const char of text) {
        map[char] = map[char] + 1 || 1
    }
    let flag = false
    let res = 0
    while (true) {
        for (const char in balloon) {
            if (!(char in map) || map[char] < balloon[char]) {
                flag = true
                break
            }
            map[char] -= balloon[char]
        }
        if (flag === true) break
        res++
    }
    return res
};