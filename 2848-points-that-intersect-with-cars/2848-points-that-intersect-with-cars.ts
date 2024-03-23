function numberOfPoints(nums: number[][]): number {
    const cars = Array(101).fill(0)
    for (const [start, end] of nums) {
        cars[start]++
        cars[end + 1]--
    }
    let cur = 0, points = 0
    for (let i=1; i < 101; i++) {
        cur += cars[i]
        if (cur > 0) points++
    }
    return points
};