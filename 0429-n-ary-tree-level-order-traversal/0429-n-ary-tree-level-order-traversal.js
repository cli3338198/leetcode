/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const q = [root], res = []
    if (!root) return res
    while (q.length) {
        const len = q.length, lvl = []
        for (let i=0; i < len; i++) {
            const {val, children} = q.shift()
            lvl.push(val)
            for (const child of children) {
                q.push(child)
            }
        }
        res.push(lvl)
    }
    return res
};