function pushDominoes(dominoes: string): string {
    const dom = dominoes.split("")
    const q: number[] = []
    for (let i=0; i < dom.length; i++) {
        if (dom[i] !== '.') {
            q.push(i)
        }
    }
    while (q.length) {
        const i = q.shift()
        if (dom[i] === 'L') {
            if (i-1 in dom && dom[i-1] === '.') {
                q.push(i-1)
                dom[i-1] = 'L'
            }
        } else {
            if (i+1 in dom && dom[i+1] === '.') {
                if (i+2 in dom && dom[i+2] === 'L') {
                    q.shift()
                } else {
                    q.push(i+1)
                    dom[i+1] = 'R'
                }
            }
        }
    }
    return dom.join("")
};