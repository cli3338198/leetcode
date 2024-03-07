function selfDividingNumbers(left: number, right: number): number[] {
    if (left > right) return []
    const res: number[] = []
    if (isSelfDividing(left)) res.push(left)
    return [...res, ...selfDividingNumbers(left + 1, right)]
};

function isSelfDividing(n: number) {
    const original = n
    while (n) {
        const digit = n % 10
        if (digit === 0 || original % digit !== 0) return false
        n = Math.floor(n / 10)
    }
    return true
}