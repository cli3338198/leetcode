/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length
    const arrOfFreqs = Array(n+1).fill(0).map(() => ({}))
    for (let i=1; i <= n; i++) {
        const n1 = A[i-1]
        const n2 = B[i-1]
        arrOfFreqs[i] = {...arrOfFreqs[i-1]}
        arrOfFreqs[i][n1] = arrOfFreqs[i][n1] + 1 || 1
        arrOfFreqs[i][n2] = arrOfFreqs[i][n2] + 1 || 1
    }
    const res = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        for (const num in arrOfFreqs[i]) {
            if (arrOfFreqs[i][num] > 1) res[i]++
        }
    }
    return res.slice(1)
};