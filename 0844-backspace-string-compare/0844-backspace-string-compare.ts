function backspaceCompare(s: string, t: string): boolean {
    let i = s.length-1, j = t.length-1
    while (i >= 0 || j >= 0) {
        const i1 = getNext(s, i), j1 = getNext(t, j)
        if (i1 < 0 && j1 < 0) {
            return true
        }
        if (i1 < 0 || j1 < 0) {
            return false
        }
        if (s[i1] !== t[j1]) {
            return false
        }
        i = i1 - 1, j = j1 - 1
    }
    return true
};

function getNext(s: string, i: number): number {
    let backspaces = 0
    while (i >= 0) {
        if (s[i] === "#") {
            backspaces++
        } else if (backspaces > 0) {
            backspaces--
        } else {
            break
        }
        i--
    }
    return i
}