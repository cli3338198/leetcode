function findBestValue(arr: number[], target: number): number {
    function findAbsDiff(num: number): number {
        let sum = 0 
        for (const n of arr) {
            sum += Math.min(n, num)
        }
        return Math.abs(sum - target)
    }
    
    let l = 0, r = target
    while (l < r) {
        const m = Math.floor((l+r)/2)
        if (findAbsDiff(m) <= findAbsDiff(m+1)) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
};