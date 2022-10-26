/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const n = books.length
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let i=1; i <= n; i++) {
        let maxHeight = 0
        let width = shelfWidth
        for (let j=i-1; j >= 0; j--) {
            width -= books[j][0]
            maxHeight = Math.max(maxHeight, books[j][1])
            if (width >= 0) {
                dp[i] = Math.min(dp[i], dp[j] + maxHeight)
            }
        }
    }
    return dp[n]
};