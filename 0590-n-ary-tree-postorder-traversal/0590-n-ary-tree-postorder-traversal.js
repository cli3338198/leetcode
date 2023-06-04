/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = []
    dfs(root)
    return res
    
    function dfs(root) {
        if (!root) return
        for (const child of root.children) {
            dfs(child)
        }
        res.push(root.val)
    }
};