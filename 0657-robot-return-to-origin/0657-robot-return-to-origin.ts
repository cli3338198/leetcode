function judgeCircle(moves: string): boolean {
    let x = 0, y = 0
    for (const move of moves) {
        if (move === "L") {
            x--
        } else if (move === "R") {
            x++
        } else if (move === "U") {
            y--
        } else if (move === "D") {
            y++
        }
    }
    return x === 0 && y === 0
};