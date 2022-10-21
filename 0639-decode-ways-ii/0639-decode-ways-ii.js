/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(numStr) {
    const mod = 10 ** 9 + 7
    const n = numStr.length
    const dp = Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = decodeChar(numStr[0])
    for (let i=2; i <= n; i++) {
        const prevChar = numStr[i-2]
        const curChar = numStr[i-1]
        dp[i] += dp[i-1] * decodeChar(curChar)
        dp[i] += dp[i-2] * decodeTwoChar(prevChar, curChar)
        dp[i] = dp[i] % mod
    }
    return dp[n]
};

function decodeChar(char) {
    console.log({char})
    switch(char) {
        case "*":
            return 9
        case "0":
            return 0
        default:
            return 1
    }
}

function decodeTwoChar(first, second) {
    switch(first) {
        case "*": 
            if (second === "*") {
                return 15
            } else if (Number(second) >= 0 && Number(second) <= 6) {
                return 2
            } else {
                return 1
            }
        case "2":
            if (second === "*") {
                return 6
            } else if (Number(second) >= 0 && Number(second) <= 6) {
                return 1
            } else {
                return 0
            }
        case "1":
            if (second === '*') {
                return 9
            } else {
                return 1
            }
        default:
            return 0
    }
}