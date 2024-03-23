function maximumPopulation(logs: number[][]): number {
    const years = Array(2051).fill(0)
    for (const [birth, death] of logs) {
        years[birth]++
        years[death]--
    }
    let cur = 0, max = 0, year = 0
    for (let i=1950; i <= 2050; i++) {
        cur += years[i]
        if (cur > max) {
            max = cur
            year = i
        }
    }
    return year
};