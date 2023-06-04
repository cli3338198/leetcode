/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    this.init = init
    this.base = init
    return {
        increment: () => ++this.init,
        decrement: () => --this.init,
        reset: () => this.init = this.base
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */