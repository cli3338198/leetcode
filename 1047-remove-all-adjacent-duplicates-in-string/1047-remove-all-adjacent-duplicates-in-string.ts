function removeDuplicates(s: string): string {
    const stack = []
    for (const c of s) {
        if (stack.length && stack.at(-1) === c) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return stack.join("")
};