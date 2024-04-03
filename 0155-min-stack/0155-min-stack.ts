class MinStack {
    stack: [number, number][]
    constructor() {
        this.stack = []
    }

    push(val: number): void {
        if (this.stack.length) {
            const [, min] = this.stack.at(-1)
            this.stack.push([val, Math.min(val, min)])
        } else {
            this.stack.push([val, val])
        }
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack.at(-1)[0]
    }

    getMin(): number {
        return this.stack.at(-1)[1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */