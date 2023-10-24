function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = []
    const res = Array(temperatures.length).fill(0)
    for (let i=temperatures.length-1; i >= 0; i--) {
        while (stack.length && temperatures[stack.at(-1)] <= temperatures[i]) stack.pop()
        if (stack.length) res[i] = stack.at(-1) - i
        stack.push(i)
    }
    return res
};