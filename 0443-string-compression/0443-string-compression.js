/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let j = 0
    let i = 0
    while (i < chars.length) {
        const c = chars[i]
        let count = 1
        while (chars[i+1] === c && i+1 < chars.length) {
            i++
            count++
        }
        chars[j++] = c
        i++
        if (count === 1) continue
        for (const num of String(count)) {
            chars[j++] = num
        }
    }
    return j
};