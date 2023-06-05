/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const res = []
    res.push(root.val)
    for (const child of root.children) {
        for (const sub of preorder(child)) {
            res.push(sub)
        }
    }
    return res
};