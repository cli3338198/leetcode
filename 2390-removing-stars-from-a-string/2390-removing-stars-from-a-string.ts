function removeStars(s: string): string {
    return rec(s.length - 1, 0)
    
    function rec(i: number, skips: number) {
        if (i < 0) {
            return ""
        } else if (s[i] === "*") {
            return rec(i - 1, skips + 1)
        } else {
            if (skips > 0) {
                return rec(i - 1, skips - 1)
            } else {
                return rec(i - 1, skips) + s[i]
            }
        }
    }
};