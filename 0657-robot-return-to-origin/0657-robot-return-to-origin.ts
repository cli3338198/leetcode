function judgeCircle(moves: string): boolean {
    const count = {"L": 0, "R": 0, "U": 0, "D": 0}
    for (const move of moves) {
        count[move] = count[move] + 1 || 1
    }
    return count["L"] === count["R"] && count["U"] === count["D"]
    
    //
    
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