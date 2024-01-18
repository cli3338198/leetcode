function finalString(s: string): string {
    let res = ""
    for (const c of s) {
        if (c === "i") {
            res = res.split("").reverse().join("")
        } else {
            res += c
        }
    }
    return res
};