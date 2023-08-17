/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const arr = Array(26).fill(0)
    for (const c of s) {
        arr[c.charCodeAt(0)-97]++
    }
    let res = ""
    while (arr.some(n => n > 0)) {
        pickSmallest()
        pickGreatest()
    }
    return res
    
    function pickSmallest() {
        for (let i=0; i < arr.length; i++) {
            if (arr[i] > 0) {
                arr[i]--
                res += String.fromCharCode(i+97)
                break
            }
        }
        while (true) {
            let found = false
            for (let i=res.length ? res.at(-1).charCodeAt(0) - 97 + 1 : 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    arr[i]--
                    res += String.fromCharCode(i+97)
                    found = true
                    break
                }
            }
            if (!found) break
        }
    }
    
    function pickGreatest() {
        for (let i=arr.length-1; i >= 0; i--) {
            if (arr[i] > 0) {
                arr[i]--
                res += String.fromCharCode(i+97)
                break
            }
        }
        while (true) {
            let found = false
            for (let i=res.length ? res.at(-1).charCodeAt(0) - 97 -1 : arr.length-1; i >= 0; i--) {
                if (arr[i] > 0) {
                    arr[i]--
                    res += String.fromCharCode(i+97)
                    found = true
                    break
                }
            }
            if (!found) break
        }
    }
};

sortString = function(s) {
    const arr = Array(26).fill(0)
    let res = ""
    for (const c of s) {
        arr[c.charCodeAt(0)-97]++
    }
    while (s.length !== res.length) {
        for (let i=0; i < 26; i++) {
            if (arr[i]-- > 0) {
                res += String.fromCharCode(i+97)
            }
        }
        for (let i=25; i >= 0; i--) {
            if (arr[i]-- > 0) {
                res += String.fromCharCode(i+97)
            }
        }
    }
    return res
}