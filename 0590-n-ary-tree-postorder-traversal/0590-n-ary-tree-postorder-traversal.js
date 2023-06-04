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

postorder = function(root, res = []) {
    if (!root) return res
    for (const child of root.children) {
        postorder(child, res)
    }
    res.push(root.val)
    return res
}