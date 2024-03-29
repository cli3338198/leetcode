/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    await Promise.all(functions.splice(0, n).map(fn => call(fn)))
    
    async function call(fn) {
        await fn()
        if (functions.length) await call(functions.shift())
    }
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

promisePool = async function(functions, n) {
    const promises = Array(n).fill().map(getNext)
    await Promise.all(promises)
    
    async function getNext() {
        if (functions.length) {
            await functions.shift()()
            await getNext()
        }
    }
}