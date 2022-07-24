
var MyQueue = function() {
    this.a = []
    this.b = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.a.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.a.length) {
        this.b.push(this.a.pop())
    }
    const temp = this.b.pop()
    while (this.b.length) {
        this.a.push(this.b.pop())
    }
    return temp
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.a[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.a.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */