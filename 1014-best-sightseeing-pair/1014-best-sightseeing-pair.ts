function maxScoreSightseeingPair(values: number[]): number {
    let pair1 = values[0] - 0
    let max = 0
    for (let i=1; i < values.length; i++) {
        const pair2 = values[i] - i
        const pairValue = pair1 + pair2
        max = Math.max(max, pairValue)
        pair1 = Math.max(pair1, values[i] + i)
    }
    return max
};