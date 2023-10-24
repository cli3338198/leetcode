function carFleet(target: number, position: number[], speed: number[]): number {
    const cars: [number, number][] = [], stack: number[] = []
    for (let i=0; i < position.length; i++) {
        cars[i] = [position[i], speed[i]]
    }
    cars.sort(([a], [b]) => a - b)
    for (const [position, speed] of cars) {
        const time = (target - position) / speed
        while (stack.length && stack.at(-1) <= time) stack.pop()
        stack.push(time)
    }
    return stack.length
};