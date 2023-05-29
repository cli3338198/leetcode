class MyStack() {
    private val a = ArrayDeque<Int>()
    private val b = ArrayDeque<Int>()

    fun push(x: Int) {
        a.add(x)
    }

    fun pop(): Int {
        while (a.size > 1) {
            b.add(a.remove())
        }
        val temp = a.remove()
        while (b.size > 0) {
            a.add(b.remove())
        }
        return temp
    }

    fun top(): Int {
        return a.last()
    }

    fun empty(): Boolean {
        return a.size === 0
    }

}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */