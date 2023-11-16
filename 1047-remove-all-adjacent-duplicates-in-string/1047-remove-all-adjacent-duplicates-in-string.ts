function removeDuplicates(s: string): string {
    const arr = s.split("")
    let i = 0
    for (let j=0; j < s.length; j++, i++) {
        arr[i] = arr[j]
        if (j > 0 && arr[i] === arr[i-1]) i -= 2
    }
    return arr.slice(0, i).join("")
    
    //
    
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