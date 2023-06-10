/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const map = {}
    for (const c of chars) {
        map[c] = map[c] + 1 || 1
    }
    let res = 0
    for (const word of words) {
        const copy = {...map}
        let flag = true
        for (const c of word) {
            if (!(c in copy) || copy[c] === 0) {
                flag = false
                break
            }
            copy[c]--
        }
        if (flag === true) res += word.length
    }
    return res
};

countCharacters = function(words, chars) {
    const cnt = Array(26).fill(0)
    for (const c of chars) {
        cnt[c.charCodeAt(0)-97]++
    }
    let res = 0
    for (const word of words) {
        const copy = [...cnt]
        let flag = true
        for (const c of word) {
            if (copy[c.charCodeAt(0)-97] === 0) {
                flag = false
                break
            }
            copy[c.charCodeAt(0)-97]--
        }
        if (flag) res += word.length
    }
    return res
}

countCharacters = function(words, chars) {
    const cnt = Array(26).fill(0)
    for (const c of chars) {
        cnt[cToI(c)]++
    }
    return words.reduce((acc, word) => {
        const copy = [...cnt]
        for (const c of word) {
            if (copy[cToI(c)] === 0) {
                return acc
            } 
            copy[cToI(c)]--
        }
        return acc + word.length
    }, 0)
    
    function cToI(c) {
        return c.charCodeAt(0)-97
    }
}