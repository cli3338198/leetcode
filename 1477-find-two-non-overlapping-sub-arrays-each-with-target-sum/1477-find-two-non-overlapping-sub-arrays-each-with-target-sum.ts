function minSumOfLengths(arr: number[], target: number): number {
    const n = arr.length
    const best = Array(n).fill(Infinity)
    let res = Infinity
    let bestSoFar = Infinity
    let sum = 0
    let start = 0
    for (let i=0; i < n; i++) {
        sum += arr[i]
        while (sum > target) {
            sum -= arr[start]
            start++
        }
        if (sum === target) {
            if (start > 0 && best[start-1] !== Infinity) {
                res = Math.min(res, best[start-1] + i - start + 1)
            }
            bestSoFar = Math.min(bestSoFar, i - start + 1)
        }
        best[i] = bestSoFar
    }
    return res === Infinity ? -1 : res
};
