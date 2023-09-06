function canReach(s: string, minJump: number, maxJump: number): boolean {
    const n = s.length
    const dp: boolean[] = Array(n).fill(false)
    dp[0] = true
    let jumpPoints = 0
    for (let i=1; i < n; i++) {
        if (i >= minJump) {
            jumpPoints += dp[i - minJump] ? 1 : 0
        }
        if (i > maxJump) {
            jumpPoints -= dp[i - maxJump - 1] ? 1 : 0
        }
        if (jumpPoints > 0 && s[i] === '0') {
            dp[i] = true
        }
    }
    return dp[n-1]
};