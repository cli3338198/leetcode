function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [-1]
    for (let a of asteroids) {
        while (stack.at(-1) > 0 && a < 0) {
            const diff = stack.at(-1) + a
            if (diff === 0) {
                a = 0
                stack.pop()
            } else if (diff > 0) {
                a = 0
            } else {
                stack.pop()
            }
        }
        if (a !== 0) {
            stack.push(a)
        }
    }
    return stack.slice(1)
};