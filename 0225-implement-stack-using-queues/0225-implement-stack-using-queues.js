
var MyStack = function() {
    this.a = []
    this.b = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.a.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.a.length > 1) {
        this.b.push(this.a.shift())
    }
    const temp = this.a.shift()
    while (this.b.length) {
        this.a.push(this.b.shift())
    }
    return temp
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const temp = this.pop()
    this.push(temp)
    return temp
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.a.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */