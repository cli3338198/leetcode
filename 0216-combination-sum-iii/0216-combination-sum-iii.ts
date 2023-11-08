function combinationSum3(k: number, n: number): number[][] {
    const dp = Array(10).fill(0).map(() => Array(n+1).fill(0).map(() => Array(k+1).fill(0).map(() => [])))
    for (let i=0; i < 10; i++) {
        dp[i][0][0].push([])
    }
    for (let curNum=1; curNum < 10; curNum++) {
        for (let curTarget=1; curTarget <= n; curTarget++) {
            for (let i=1; i <= k; i++) {
                dp[curNum][curTarget][i] = clone(dp[curNum-1][curTarget][i])
                if (curNum <= curTarget) {
                    for (const sub of dp[curNum-1][curTarget-curNum][i-1]) {
                        dp[curNum][curTarget][i].push([...sub, curNum])
                    }
                }
            }
        }
    }
    return dp[9][n][k]
    
    function clone(a: number[][][][] | number[][][] | number[][] | number[] | number) {
        if (typeof a === "number") {
            return a
        } else {
            return a.map(clone)
        }
    }
};