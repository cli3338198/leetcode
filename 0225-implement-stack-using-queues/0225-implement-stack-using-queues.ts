class MyStack {

    constructor(private a: number[] = [], private b: number[] = []) {

    }

    push(x: number): void {
        this.a.push(x)
    }

    pop(): number {
        while (this.a.length > 1) {
            this.b.push(this.a.shift())
        }
        const temp = this.a.shift()
        while (this.b.length) {
            this.a.push(this.b.shift())
        }
        return temp
    }

    top(): number {
        return this.a.at(-1)
    }

    empty(): boolean {
        return this.a.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */