function lengthOfLastWord(s: string): number { 
    let res = 0
    for (let i=s.length-1; i >= 0; i--) {
        if (s[i] !== " ") {
            res++
        } else {
            if (res > 0) return res
        }
    }
    return res
};