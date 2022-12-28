function diffWaysToCompute(expression: string): number[] {
    const n = expression.length
    const dp: number[][][] = Array(n+1).fill(0).map(() => Array(n+1).fill(0).map(() => ([0])))
    for (let len=1; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            const res = []
            for (let k=i; k <= j; k++) {
                const c = expression[k]
                if (c === '-' || c === '+' || c === '*') {
                    const left = dp[i][k-1]
                    const right = dp[k+1][j]
                    for (const l of left) {
                        for (const r of right) {
                            if (c === '-') {
                                res.push(l - r)
                            } else if (c === '+') {
                                res.push(l + r)
                            } else {
                                res.push(l * r)
                            }
                        }
                    }
                }
            }
            if (!res.length) {
                res.push(Number(expression.substring(i, j+1)))
            }
            dp[i][j] = res
        }   
    }
    return dp[0][n-1]
};