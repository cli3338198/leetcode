function minRemoveToMakeValid(s: string): string {
    const arr = s.split(""), stack: number[] = []
    for (let i=0; i < s.length; i++) {
        const c = s[i]
        if (c === "(") {
            stack.push(i)
        }
        if (c === ")") {
            if (stack.length) {
                stack.pop()
            } else {
                arr[i] = ""
            }
        }
    }
    while (stack.length) {
        arr[stack.pop()] = ""
    }
    return arr.join("")
};