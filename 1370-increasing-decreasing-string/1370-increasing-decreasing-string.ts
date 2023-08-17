function sortString(s: string): string {
    const arr = Array<number>(26).fill(0)
    let res = ""
    for (const c of s) {
        arr[c.charCodeAt(0)-97]++
    }
    while (arr.some(Boolean)) {
        for (let i=0; i < arr.length; i++) {
            if (arr[i] > 0) {
                res += String.fromCharCode(i+97)
                arr[i]--
                break
            }
        }
        for (let i=Math.min(res.at(-1).charCodeAt(0)-97+1, arr.length-1); i < arr.length; i++) {
            if (arr[i] > 0) {
                res += String.fromCharCode(i+97)
                arr[i]--
            }
        }
        for (let i=arr.length-1; i >= 0; i--) {
            if (arr[i] > 0) {
                res += String.fromCharCode(i+97)
                arr[i]--
                break
            }
        }
        for (let i=Math.max(res.at(-1).charCodeAt(0)-97-1, 0); i >= 0; i--) {
            if (arr[i] > 0) {
                res += String.fromCharCode(i+97)
                arr[i]--
            }
        }
    }
    return res
};