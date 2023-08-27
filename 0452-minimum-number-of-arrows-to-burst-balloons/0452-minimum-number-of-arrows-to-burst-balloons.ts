function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1])
    let poppedUpTo = -Infinity, res = 0
    for (const [w0, w1] of points) {
        if (w0 > poppedUpTo) {
            poppedUpTo = w1
            res++
        }
    }
    return res
};