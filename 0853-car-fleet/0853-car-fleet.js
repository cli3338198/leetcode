/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = [], stack = []
    for (let i=0; i < position.length; i++) {
        cars[i] = [position[i], speed[i]]
    }
    cars.sort((a, b) => a[0] - b[0])
    for (const [position, speed] of cars) {
        const time = (target - position) / speed
        while (stack.length && stack.at(-1) <= time) stack.pop()
        stack.push(time)
    }
    return stack.length
};