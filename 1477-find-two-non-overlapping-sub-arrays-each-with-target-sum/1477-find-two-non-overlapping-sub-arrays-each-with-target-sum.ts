function minSumOfLengths(arr: number[], target: number): number {
    const n = arr.length
    const prefixSums: Record<string, number> = {}
    let sum = 0
    let leftSize = Infinity
    let res = Infinity
    for (let i=0; i < n; i++) {
        sum += arr[i]
        prefixSums[sum] = i
    }
    prefixSums[0] = -1
    sum = 0
    for (let i=0; i < n; i++) {
        sum += arr[i]
        if (sum - target in prefixSums) {
            leftSize = Math.min(leftSize, i - prefixSums[sum - target])
        }
        if (sum + target in prefixSums) {
            res = Math.min(res, prefixSums[sum + target] - i + leftSize)
        }
    }
    return res === Infinity ? -1 : res
};