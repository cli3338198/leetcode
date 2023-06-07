/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, obj) => {
        const key = fn(obj)
        if (key in acc) {
            acc[key].push(obj)
        } else {
            acc[key] = [obj]
        }
        return acc
    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */