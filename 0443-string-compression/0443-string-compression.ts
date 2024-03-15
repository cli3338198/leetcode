function compress(chars: string[]): number {
    let left = 0, right = 0
    while (right < chars.length) {
        const char = chars[right]
        let count = 1
        while (right < chars.length && chars[right + 1] === char) {
            count++
            right++
        }
        chars[left] = char
        left++
        right++
        if (count === 1) continue
        for (const n of String(count)) {
            chars[left++] = n
        }
    }
    return left
};