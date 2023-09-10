function change(amount: number, coins: number[]): number {
    // iterate coins x amount
    // for each coin find how many times you can use that coin to fill up to amount
    // take previous result or dp[i-1][current amount], to get result using the previous coin
    // add to those results
    const dp = Array(coins.length+1).fill(0).map(() => Array(amount+1).fill(0))             
    for (let i=0; i <= coins.length; i++) {
        // there is one way to make an amount of zero for each coin
        dp[i][0] = 1                       
    }
    for (let i=1; i <= coins.length; i++) {
        for (let j=1; j <= amount; j++) {
            // take previous result using previous coin(s)
            dp[i][j] += dp[i-1][j]
            if (coins[i-1] <= j) {
                dp[i][j] += dp[i][j-coins[i-1]]
            }
        }
    }
    return dp[coins.length][amount]
};